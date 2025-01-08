import CardTour from './CardTour';

export const Tour = ({ title, description, tour = [], error, onDelete }) => {

    return (
        <>

            <div className='text-center p-6 mb-6'>
                <h1 className='text-[40px] text-pink-700 font-bold'>{title}</h1>
                <p className='text-gray-500 py-4 hover:text-gray-700 m-8'>{description}</p>
            </div>

            {error && <p className='text-red-600 text-[20px] text-center'>{error}</p>}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {
                    tour.map((tourItem) => (
                        <div>


                            <CardTour 
                                id={tourItem.id}
                                key={tourItem.id}
                                images={tourItem.image}
                                name={tourItem.name}
                                info={tourItem.info}
                                price={tourItem.price}
                                onDelete={onDelete}
                           >
                          
                            </CardTour>
                        </div>
                    ))
                }

            

            </div>
        </>
    );
};
