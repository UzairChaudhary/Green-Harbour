import Link from "next/link";
import { usePathname, useRouter } from 'next/navigation'

const ActiveLink = ({ href, children }) => {
  const pathname = usePathname();
  const router = useRouter();
  var isActive;
  // Use the pathname of the current route to determine if the link should be active
  if (href==="/"){
    isActive=false
  }
  else isActive = pathname === href;
  
  const handleClick = (e) => {
    //console.log("pathname: ",pathname)
    //console.log("href: ",href)
    if (pathname.includes("/") && href==="#aboutus"){
      
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    if (pathname.includes("/who-qualifies") && href==="#aboutus"){
      
      router.push('/');
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      
  }
  if (pathname.includes("/") && href==="#how-it-works"){
      
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
   
  };

  return (
    <Link href={href} legacyBehavior scroll= {false}>
      <a className={` ${isActive ? "active" : ""}`} onClick={handleClick}>{children}</a>
    </Link>
  );
};

export default ActiveLink;
