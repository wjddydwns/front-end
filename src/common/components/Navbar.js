import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { FaShippingFast } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const MyNavbar = () => {
  
  const navigate = useNavigate()
  return (
    <Container>
    <Navbar expand="lg" className="px-4 py-2 ">
      <Navbar.Brand href="/" className='logo'>
      <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAABlCAMAAACMReHqAAAAw1BMVEX///9zRvMDx1pxQ/NvP/Mz0HaKZvVqN/L7+f/OwPttPfPWy/uYevZyQvNwQfNuZ+TUx/smymvb0/vw6/6giPawmfj39f6KafV7T/T08f4+0Xvy/Pe/rfli1ImfhPZnMvKIYfUXyWHf+OuSc/UAw0l/WfTIufrk3fx3S/O5pPkAxVKYfPbs5v3g1/xkK/LCsflF0YOFfeiK4at8VPSPb/W168h/3qLO8ty4pviW47Sslfin6MFv2Zenjve0nfhfIfLX9ePsd3hBAAAK9klEQVR4nO2d63rauhKGDXYQCHAdjiYQm0LNKQSyAllNsxp27/+qNpAUdLaFZbAVvqd/ik+y3sxIHkkjw9hp8HJ/d5Ocnv7pFxLT2nPqxlWy6j5/n83yyWl2+80yE1PVgsG0eOk6zJoGN0kS3+n2WzWXpEzQvhq7lLqJM08cei5nra62LqN/E2d+Bug5sLl0PWZJPxNHfhboOTi+dE1mSM/JG/p5oH8hUy+2WvVxbVxvFSM0atNh5ajhx283yTM/C/RqP1Y9OqWjRi3py8slhRL7rHrpbe0C39/+g8HwtRxWNA/YB1n+x2/fNYFurqRJoVpB66CFfEtRAZYyibonHWc4sWDV/PvSNqy6TXFxPQupJfDx2xmYnwe625FGhSgwj7fy5aE/WPySyUrQUJUKwDKJ002Y8+aComkNfaU99HHBZ9cjBE1+4641dO0tvTThPwRUuMauNXTdLX0DSceOXeQ+coqmNXTNLX0KQt7fcthF0xq63pY+gqEVkKsxi3aFzlXKoZeFvv2zBnzmqJPW0HV2760gSgVCj9WH1xq6zpb+Furc9wIjRtG0hn5RSx8ugDItmuTdHyeEc7fh7kRI1qq5YgSQr9C5igl9XFMo6pPbww0d2uteuVYrTwuQ8ABwSRdNa+gXde+JqrNAX9S2lwd7njcB5gOqAd2qaw39opaeqJaoPVsB9mVWymHUAR2iyQJ000YlAV1bSy9WEGymSxSuhNURfKMuzwB0sz9EJQFdW0ufo904k4rAjNBQXXVN+fcMQAdLo3VQsbgKj0loD72MUIUefRytI8oRyEL/foeLnldFnHDHm5AhAx3/1AyiQ9fWvTeRJr3KGExz0CYfUjNp5KDfGV1M1LTZHwP8BOOeM9/uLNC1tfThsdW2KoyYWx0tO+yRh6Wgz+6Iq7ukIf/oEmdcFLq2lo4UjUa6E4rVehAdlYdOzZZOF3RdLb3uHosGmANpr4h/N/vk0ZjQyenS6YIez9LR3hAInWHKUanZUCHchY8nyJ8jc56ug/T0zAl5NC504xajmi7osSy946LtImvcIlStaQ7A8LmuoYIQJ1ujmRGa+8gpPnk0NvSfWLOuEfRH9FawccIdxoUIQ97R3gS39PLxtpxp3i0U+oI8Ghu68euHntBL6GcP3S6Gq75SNrhKQj/WHadgRbR2fbJ/Hx+68YRwTRf0WG16A0NGh71CtVY3oE5Ad45fbJxVPEU0ZEdNn1EAfYA4eH2gt/DHMCLYISqFTFuUkTx0N2Hoxn9HsOmCHse99whmULRkhKWhxNBQ6JtwofPce+LQjd8HstpAr5OPYYW4RZpHHyOI8Cbps3Sjqx/0d2oKWrUkdYPHCatIJyqN0I0X3aAvffpuvpSDryk0dNXQG0qgHxy8JtCJyScfsgsyqYtw6HHTZcWGPn9rHrTpo2U7HXr3MzCXLuin9t577KAKDCRsHYfuxlRs6LUFPAqfTvVxxQnQ/468pAv6aZZeb/CmlFfd6CF4FHq1XW/FE37vU6BzPyBjQP8ceYkNneHbCOgrRtZBldCXK/4yAtPyorp4HLra7GYnfLIlA727D8zFhh4U+qQCvNu8pk7oF9g9ZXnoxcc3Wxwvt8CwHCn/DA5dPmWNSKmBbgyUQHc6tHAzYZzQYgdCZKF3lutc+GIhy2o3I7TtXwO68WsWH/oJIe6dKswwtwz0ujNtA8D422HcuQr9oOmEgP8i0HeAswa9WOzMx6PNQ9+1qWVge9keuWjs49bQdvterzavdzg8vwr0QZagO6/Tzdu7V+nnAIBWldOQA88YUcmbPu9uWhDAVX/ovU17y2WP6Kt9FejGyyw70D1/98Vq2cJu2z7g7rB9wOczTNvaf/v+j+CqL/TBT/z/99mB3ggf7TY/x1MdN8LIODlXTWPotwPs/928RtAt8DdPz7wNQiNCQujrk96Kq8sGZwb5J/yHF32gwwoy7bmZCwsgiqCbKyTyfZLSFIYdfP/xIsaRVegQ4PuB1NwQYxdB3zYUMYXf/JQBl830oNdCrAGX3UypP0IcF4UuGnARQrdBgwq39lxhrE4IPa5SNbS6hT4jHDyhLFo6NNesrHt1T4SdhP7IPfMEpWoSxc7SZ7/4NZtB6Daw3nmFqPcCn/PVTkEfuwpNPXXQ87M//KqVhs5LZyqWKuhVmKv0RJ9XxZoXQKa9k9BbbYX5VVI1MfID+hPZZUckO+DytuzJa9lnWpUUdNOGwO/3whcqzp13dxfEIx5JrSmLmOgtktJn6fnZv/wqkoXO6roCEy4WCx/wO7ecQGkk6Pu9+wBYVTalyNOh5qVNJYDbAtmH0XwKekcc7JNS+ix9+zsRmEOkYOZMDnbq8/LSC1gjXsKqEkL3t6ShnZusgsLDxpnXJec5FDvz2uv7sB+4k1zVAlQYdjfpSq64ojdJI/QbroNXAf2zWMVaA0otIBBCH21el6OSU36UpU2oNR/XyqVR742+zSY8jhf1TVIIPT/7zasThdC3mhdkjD3m+vT4clZqlq2aKWzTd0d4gTm10I3WUMJnxsxEoUDzzUpNctjYETlMiqDn8wODKcXQjWIhuoe/uKXv1akrEH7LtEDnOXjV0A0nusNMB/QElI42Pc8NzCmHfr6cM+mVE56UIMH16ejS9BnTwauH7kXuy12+TRepiEnqUjT9SMC+OVoPPlkNCqHfs77b1EN/jdyVSzV0B9vklkriLxQKnUodtVcRrSTF6UdQ6PnZM+Pp6qGPImd4SLV7HyGb3NpwKHUtml2KSh21VyfBREMDPGMkIzB3UehptnRsgy2rInUtmgSa8t17oRmD6axjKqHPbuinXy2dozjQ0RR3ETJGuuRRpZbOGHm5WjpHcaCH54ZFt4qyqWmZSqEzHPwVOkexoKNZoB9Cs0BTibEUQ58lsD796t4pbZCLbcYUAKyOAJUsJ16+9z8U9N/q871fLZ0StrPDO30cz2xFzUaKt7PDDX3KjfKdHa6WTgnN/Z2rUl25JVpFZp+qhQzs4ZKDBpqI42rpBo7NnBCrpsvYmJRFJ8DLAnSzgu7WxJ4P98WgY3/5VgFr1sv4PFy6Sc8E9By2L5vEKBsf+ricgKRWKWJJpukdN8KE5bmz/d5hTGX87uPJzFy6d58J6CdKAN2DVdWyJ0d7ey+0w4QPFrqh57fX2FgZkdESrhqvJccpbR4m5F6rU8bbo9ChZtD5HbnoQ3XRn4ZAH4b/TREOK/R8a4JBJ9dS7DIkAMbMbHPCqAOtLf3M0I/9qYrCDNB/b+/io+Kv0fqzgBWw0xq6wL1nHnoriFKBFr3npu7QdbZ0o8ZbVYdeBJg5sLSGrrOlbz/bQt/BnLBW32oOXWtLN4zlQmzrps9JUa81dL0tffutPxE9x57w0hdrDV1zSzeMR0HyYtjnrvW/Qlf2tAtAN1rvrNSmW9mwwQ8Qag1dd/e+U61t0w+zrbUoM73W0PmWXvHVrDFDZaEROQU7rBKacFbPF0sFH8DDkMQuNLdYO8KJ9FpD51v6o5OAjv50U1GvB/6QYX30Vgmgv5PVrzRHYYOLLOi8iQ+Zg87efPYMKiYh8RPr4w9FWW7Pgs6YD5NJ6JwVnVd5yEIL63O1xDNnXlvWoEO5xUJfR1NsSdXHbz+TZ34W6OC0/GRfVL+TN/UzQGdNE72Kq8Ft4tSTh265apOsa6/BTdLUk4ZugrbMJplXbdV9zs+S5D67/cbYU0+VqhaYNNXuf/c19Oe/+7ub5PT0T7+QmNbeKDzd51Wo/g/u8gRAogWV4QAAAABJRU5ErkJggg=='/>
      </Navbar.Brand>
      <Form className="d-flex mx-auto w-50 ">
          <Form.Control
            type="search"
            placeholder="검색어를 입력해주세요"
            className="me-2 border-purple"
            aria-label="Search"
          />
        </Form>
      <div style={{width:"150px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <FaShippingFast size={24}/>
        <FaRegHeart size={24}/>
        <FaCartPlus size={24} onClick={()=>{navigate('/cart')}}/>
      </div>
  </Navbar>
  </Container>
);
}


export default MyNavbar