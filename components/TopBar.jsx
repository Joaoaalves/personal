import DarkModeSelector from "./DarkModeSelector";
export default function TopBar() {
  return (
    <div className="fixed top-0 left-0 flex items-center justify-end w-screen px-6 py-4">
      <DarkModeSelector />
    </div>
  );
}
