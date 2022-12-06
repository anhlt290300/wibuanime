import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

export const GenreListData = [
    'action',
    'adventure',
    'cars',
    'comedy',
    'crime',
    'dementia',
    'demons',
    'drama',
    'dub',
    'ecchi',
    'family',
    'fantasy',
    'game',
    'gourmet',
    'harem',
    'historical',
    'horror',
    'josei',
    'kids',
    'magic',
    'martial - arts',
    'mecha',
    'military',
    'Mmusic',
    'mystery',
    'parody',
    'police',
    'psychological',
    'romance',
    'samurai',
    'school',
    'sci - fi',
    'seinen',
    'shoujo',
    'shoujo - ai',
    'shounen',
    'shounen - ai',
    'slice - of - Life',
    'space',
    'sports',
    'super- power',
    'supernatural',
    'suspense',
    'thriller',
    'vampire',
    'yaoi',
    'yuri',
]

const GenreList = () => {

    const [genre, setGenre] = useState('action')

    return (
        <div className='my-4 text-white' >
            {
                GenreListData.map((item, index) => {
                    return (
                        <div className={(item !== genre) ?
                            'inline-block mr-4 border-b-[1px] border-gray-700 cursor-pointer font-semibold hover:border-red-700 hover:text-red-700' :
                            'inline-block mr-4 border-b-[1px] border-red-700 text-red-700 cursor-pointer font-semibold'}
                            key={index}
                            onClick={() => setGenre(item)}
                        >{item}</div>
                    )
                })
            }
        </div>
    )

}


export default GenreList 