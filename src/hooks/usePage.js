import { useState } from 'react'

const usePage = () => {

    const [page, setPage] = useState('home')
    return { page, setPage }

}

export default usePage