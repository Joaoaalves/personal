function Root({children}){
  return <ul className="flex flex-col items-center justify-center py-8 w-2/3">
    {children}
  </ul>
}

function Item({children}){
  return (
    <div className="grid grid-cols-[12px_1fr] grid-rows-1 items-center gap-x-2 w-full">
        {children}
    </div>
  )
}

function Point(){
  return (
    <div className="h-full !w-[2px] bg-neutral-200 dark:bg-neutral-600 relative">
      <div className="w-3 h-3 top-7 absolute right-[-5px] rounded-full bg-neutral-200 dark:bg-neutral-600"></div>
    </div>
  )
}

function Content({children}){
  return (
    <div className="flex flex-col items-start justify-center py-6">
      {children}
    </div>
  )
}

function Date({children}){
  return (
    <span className="text-neutral-600 dark:text-neutral-300 text-sm max-w-80">{children}</span>
  )
}

function Title({children}){
  return (  
    <h2 className="text-neutral-800 dark:text-neutral-50 text-2xl max-w-80 -ms-[0px] mb-2">{children}</h2>
  )
}

function Text({children}){
  return (
    <p className="text-neutral-900 dark:text-white text-xs max-w-80">
      {children}
    </p>
  )
}

export default {
  Root,
  Item,
  Point,
  Content,
  Date,
  Title,
  Text
}