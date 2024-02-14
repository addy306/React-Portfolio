import React from 'react';

function LiveWebsite() {
    return(
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
            <div
                className="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                <img src="/kakakii.JPG" alt="kakakii website"/>
                <div className="p-4 pt-2">
                    <div className="mb-8">
                        <p className="text-sm text-gray-600 flex items-center">
                            
                           
                        </p>
                        <a href="https://www.kakakii.com/?Currency=USD" className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block">Kakakii Website
            </a>
                        <p className="text-gray-700 text-sm">An online Marketplace Ecommerce website.
                            Made with wordpress,using themes, plugins, woocommerce,multivendor plugin and intergrated payment system.</p>
                    </div>
                   
                </div>
            </div>
            <div
                className="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                <img src="/Afribirther.JPG" alt="afribirther website image"/>
                <div className="p-4 pt-2">
                    <div className="mb-8">
                       
                        <a href="https://afribirther.org/" className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block">Afribirther Website</a>
                        <p className="text-gray-700 text-sm">An online forum website.
                          Made with wordpress, using themes and wordpress plugins. The site includes blog page,forum page and video pages. Interegratd membership with user registration and login.  </p>
                    </div>
                    
                </div>
            </div>
    
        </div>
    </div>
    )
}

export default LiveWebsite