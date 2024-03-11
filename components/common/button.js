import Link from 'next/link'
export default function Button (){
    return(
        <Link
        href={'/who-qualifies'} 
        className="block  sm:w-auto bg-orange-500 text-lg text-white py-2 px-4 rounded-lg text-center hover:scale-105 hover:transition-a hover:bg-orange-600">
            Register Today
        </Link>
    )
}