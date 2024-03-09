import Link from 'next/link'
export default function Button (){
    return(
        <Link
        href={'/who-qualifies'} 
        className="hover:scale-105 hover:transition-a bg-orange-500 text-lg hover:cursor-pointer text-white py-2 px-4 rounded-lg">
              Register Today
        </Link>
    )
}