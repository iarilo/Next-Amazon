
import Head from 'next/head';
import  { FC, PropsWithChildren } from 'react';



interface ISeo {
   title: string
   description?: string
   image?: string   
}




export const  tytleMerge = (title: string) => `${title} | next`

const Meta: FC<PropsWithChildren<ISeo>> = ({title, description,image, children}) =>
 {
//    const {asPath} = useRouter()
//    const currentUrl =  `${process.env.APP_URL}${asPath}`

  return(
    
    <> {/* <> </> Выражения JSX должны иметь один родительский элемент. */}


    {/*Оборачиваю Head  в выражения JSX родительского элемента */}
    <Head>
        <title itemProp='headline'>{tytleMerge(title)}</title>
        {/* Делаю проверку: если description ? а если нет : meta name='robots' */}
        {description? (
            <>
   {/*Оборачиваю meta  в выражения JSX родительского элемента */}
            <meta
                  itemProp='description'
                  name='description'
                  content={description} 
                  />
                  <link rel='canonical' href='{currentUrl}' />
                  <meta property='og:locale' content='en' />
                  <meta property='og:title' content={tytleMerge(title)} />
                  <meta property='og:url' content='currentUrl ' />
                  <meta property='og:image' content={image || '/icons8-корзина-эмодзи-48.png'}/>
                  <meta property='or:description' content={description}/>
            </>
                  
        ): (
            <meta name='robots' content='noidex, nofollow' />      
        )}
    </Head>
    {children}
   </> 
    
  )

}

export default Meta

