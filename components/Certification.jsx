import { useState } from 'react';
import Image from "next/image"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { PiCertificateLight } from "react-icons/pi";
import { useTranslation } from "next-i18next";

function Root({children}){
    return (
        <div className="flex flex-col items-center lg:flex-row lg:items-start shadow-md dark:shadow-none border dark:border-neutral-900 p-12 gap-x-8 rounded-lg w-full">
            {children}
        </div>
    )
}

function Logo({src}){
    return (
        <div className="min-w-48 xl:min-w-48 xl:max-w-48 h-48 bg-contain bg-no-repeat bg-bottom lg:bg-top rounded bg-clip-content" style={{backgroundImage: `url(${src})`}}></div>
    )
}

function Info({children}){
    return (
        <div className="flex flex-col text-center lg:text-start items-center lg:items-start h-full">
            {children}
        </div>
    )
}

function Title({children}){
    return (
        <h2 className="text-xl mt-8 lg:mt-0 lg:text-2xl font-bold">{children}</h2>
    )
}
function Institution({children}){
    return (
        <h3 className="text-xl font-semibold text-neutral-500 dark:text-neutral-400">{children}</h3>
    )
}

function Description({ id, text, amountOfWords = 40 }){
    "use client"
    const { t } = useTranslation();
    const [isExpanded, setIsExpanded] = useState(false)
    const splittedText = text.split(' ')
    const itCanOverflow = splittedText.length > amountOfWords
    const beginText = itCanOverflow
      ? splittedText.slice(0, amountOfWords - 1).join(' ')
      : text
    const endText = splittedText.slice(amountOfWords - 1).join(' ')
    
    const handleKeyboard = (e) => {
      if (e.code === 'Space' || e.code === 'Enter') {
        setIsExpanded(!isExpanded)
      }
    }
  
    return (
      <p className="indent-10 my-12" id={id}>
        {beginText}
        {itCanOverflow && (
          <>
            {!isExpanded && <span>... </span>}
            <span 
              className={`${!isExpanded && 'hidden'}`} 
              aria-hidden={!isExpanded}
            >
              {endText}
            </span>
            <span
              className='text-cyan-500 ms-2 font-bold'
              role="button"
              tabIndex={0}
              aria-expanded={isExpanded}
              aria-controls={id}
              onKeyDown={handleKeyboard}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? t('certifications.showLess') : t('certifications.showMore')}
            </span>
          </>
        )}
      </p>
    )
  }

function Modal({title, src, text}){
    return (
        <Dialog>
            <DialogTrigger className="mt-auto flex items-center justify-center gap-x-4 lg:self-end dark:border-white border-black dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white transition-all duration-300 border p-4 rounded">
                <PiCertificateLight className="text-2xl"/> {text}
            </DialogTrigger>
            <DialogContent className="bg-transparent border-none shadow-none min-w-[80vw] !flex !items-center !justify-center text-white">
                <DialogHeader>
                <DialogTitle className="text-center font-bold text-2xl">{title}</DialogTitle>
                <DialogDescription>
                    <Image src={src} width={1200} height={1200} className="rounded-lg rotate-90 scale-50 lg:scale-75"></Image>
                </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}


export default {
    Root,
    Logo,
    Info,
    Title,
    Institution,
    Description,
    Modal
}