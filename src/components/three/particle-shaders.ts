// Simplex 3D noise by Ian McEwan, Ashima Arts (MIT)
const noise = /* glsl */ `
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
    const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

    vec3 i = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);

    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);

    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;

    i = mod289(i);
    vec4 p = permute(permute(permute(
        i.z + vec4(0.0, i1.z, i2.z, 1.0))
        + i.y + vec4(0.0, i1.y, i2.y, 1.0))
        + i.x + vec4(0.0, i1.x, i2.x, 1.0));

    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);

    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);

    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);

    vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}
`;

export const vertexShader = /* glsl */ `
uniform float uTime;
uniform float uPixelRatio;
uniform float uSize;
uniform float uIntro;
uniform float uToDust;
uniform float uToWave;
uniform float uToSphere;
uniform float uScale;
uniform vec2 uMouse;

attribute vec3 aSphere;
attribute vec3 aDust;
attribute vec3 aWave;
attribute vec4 aRandom;

varying float vAlpha;

${noise}

mat2 rot(float a) {
    float s = sin(a);
    float c = cos(a);
    return mat2(c, -s, s, c);
}

void main() {
    float t = uTime;

    // Living sphere: two octaves of noise breathing over a slowly turning globe
    vec3 s = aSphere;
    float n = snoise(s * 0.55 + vec3(0.0, t * 0.14, t * 0.09));
    float n2 = snoise(s * 1.9 - vec3(t * 0.11));
    s *= 1.0 + n * 0.17 + n2 * 0.04;
    s.xz = rot(t * 0.07) * s.xz;
    s.xy = rot(0.32) * s.xy;
    s *= uScale;

    // Drifting dust
    vec3 d = aDust;
    d.x += cos(t * 0.13 + aRandom.y * 6.2831) * 0.45;
    d.y += sin(t * 0.17 + aRandom.x * 6.2831) * 0.45;
    d.z += sin(t * 0.11 + aRandom.w * 6.2831) * 0.45;

    // Rolling terrain
    vec3 w = aWave;
    w.y += sin(w.x * 0.55 + t * 0.55) * 0.28
         + cos(w.z * 0.6 + t * 0.4) * 0.28
         + snoise(vec3(w.xz * 0.22, t * 0.08)) * 0.75;

    // Each particle leaves and arrives on its own schedule
    float lag = aRandom.z * 0.45;
    float a = smoothstep(lag, lag + 0.55, uToDust);
    float b = smoothstep(lag, lag + 0.55, uToWave);
    float c = smoothstep(lag, lag + 0.55, uToSphere);

    vec3 p = mix(s, d, a);
    p = mix(p, w, b);
    p = mix(p, s, c);

    // Intro: converge from far outside the frame
    vec3 origin = normalize(aDust + 0.001) * (9.0 + aRandom.w * 12.0);
    float i = smoothstep(lag * 0.9, 1.0, uIntro);
    i = 1.0 - pow(1.0 - i, 4.0);
    p = mix(origin, p, i);

    // Pointer pushes particles away
    vec2 diff = p.xy - uMouse;
    float push = smoothstep(1.7, 0.0, length(diff));
    p.xy += normalize(diff + 0.0001) * push * 0.5;
    p.z += push * 0.6;

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;

    float size = uSize * (0.55 + aRandom.w * 0.9);
    gl_PointSize = size * uPixelRatio / -mv.z;

    float depth = smoothstep(-26.0, -4.0, mv.z);
    float twinkle = 0.75 + 0.25 * sin(t * 1.4 + aRandom.x * 40.0);
    vAlpha = (0.18 + 0.62 * aRandom.x) * depth * twinkle * i;
}
`;

export const fragmentShader = /* glsl */ `
uniform vec3 uColor;
uniform float uOpacity;

varying float vAlpha;

void main() {
    // Crisp dot with a one-pixel soft edge
    float d = length(gl_PointCoord - 0.5);
    float a = smoothstep(0.5, 0.32, d);
    if (a < 0.01) discard;

    gl_FragColor = vec4(uColor, a * vAlpha * uOpacity);
}
`;
