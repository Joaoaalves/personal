import DarkModeSelector from "./DarkModeSelector";
export default function TopBar(){
  return (
    <div className="fixed top-0 left-0 flex items-center justify-end w-screen py-4 px-8">
      <DarkModeSelector />
    </div>
  )
}