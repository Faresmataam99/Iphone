import Product from "./product"



// const products =[
// {title:"Iphone 14" , price:"699" , color:"pink" , Image:""},
// {title:"Iphone14 Pro", price:"1999",color:"gold",Image:"/14pro"},
// ] // 

export default  ()=>{
return (
  <>
  <header>
    <nav className="flex justify-center items-center p-4 shadow-xl ">
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAv5JREFUaEPtmUvozFEUxz9/C9kgr0SeIawUKYRIXhHyKGXBwooFZSFLG0lS3iGKpLyilCKFJImIvBJFHlGeC0Up7reu+jfNzO/c+7tz/6bm1NTUnPO93+99nHvPmTaa3NqanD8tAR29gh2xAr2AlcB8YDTQr8wk5BYg0keAPp70p3bfo3TkFLAMOFXB8iYwOYq5D8olYJzbMnerEF0P7GwGAa+AwRVE3wPDgJ//u4C1wJ4qJGe67XOlDHnF5thCV4FpFUTXAPvLks8l4DvQrR3ZVcDRFORzCfgDPPDb5SDwPBX5sgLmABuBIf7zFrgHHAdO1yA5FZjhU+cooD/wBLgNXADOhYqLOQMDgcOADmEtU2YRoQNAJ2A2sMhnnXocP7pzuTnkfIQK0KyfcLm7R+hMBfrfAGZZUmyIAGUSZZRcdgbQ7V3XrAL0AHvslrZvEWCi318D8/yYSQQcAlYnIlcE8wjQYf9a5GjNQnru6trPYe/c4de7SYfZZJYttAHYbkIr76S0vC0ExiLgosvTc0NAS/iqTlCNYDaLgDfAADNivKPGGRQabhHwC+gcChzhr9t4QmicRYDeMjmsYQI+Az0zKGjYFnoGjMwgQEMMBVS9mc2yha77i8UMWsJxK7ApJN4iYC+gCiqH6RU7HNCFZjKLgMXAWRNaGqdbfsV/W+AsAroD3yxgCX1OAssteBYBwlEDapIFMKHPU2B3UXFjFbDCl4oJ+ZmgrgHT63laBQjjQ8Z64B/npUXnL0SA0tsW07ylcXoBjCiCChEgLFVKwQ+uIhI1flcL/lhRbKiAJYBq1Uab+V0UKkDEzwMLG6jgh+sPjQFeWsaIEdAVeOibWZYxQn10cZobXDECRGisvxu6hLIr8N8HqJtttlgBGmCiPw9qD1azL64jp2eB2jG9/bZQwV7LdrlOxDozc+9YRoAgREyzNgXQk+O+E3YJUB1d7R8Z1RWqrxcA433MZde93uH6QHdCycu/rICYMZPGtAQknc4IsNYKRExa0pCmX4G/padoMQXc61gAAAAASUVORK5CYII="/>
    </nav>
  </header>
  <div>
    <img src="wallpaper.jpg" className="h-full w-full object-cover relative" />
    <p className="text-6xl font-bold text-white">Unlimited peroformance </p>
  </div>
  <div className="flex items-center justify-center gap-10 m-32">
  <Product image="14pro.webp" title="Iphone14 Pro" price="999.99"/>
  <Product image="basic.jpg" title="Iphone 14" price="599.00"/>
  </div>
  </>
)
}

