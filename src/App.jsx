import React, { useEffect, useState } from 'react'
import axios from 'axios';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import './App.css'
import Header from './Header'
import Product from './components/Product'
import Category from './components/Category'
import Slider from './components/Slider'
import Fillter from './components/Fillter'
import Footerdev from './components/Footerdev'
import FooterDesk from './components/FooterDesk'
import Basket from './components/header/Basket'
import Logo from './components/header/Logo';





function App() {



  //setting position the box of cart
  const [left, setLeft] = useState(true)

  //setting display the content of box cart -سبد شما خالی ست
  const [show, setShow] = useState(true)

  //set adding the cart
  const [cart, setCart] = useState([])

  const [visibility, setVisibility] = useState(true)

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('oldCart')) != null) {
      const x = JSON.parse(localStorage.getItem('oldCart'))
      setCart([...x])
     // console.log(x)
      setShow(false)
    }
  }, [])

  //getting data from app start***

  const [products, setProducts] = useState([])
  function myData() {
    axios.get('https://one-api.ir/digikala/?token=745773:66ac97d10ec51&action=home')
      .then(function (response) {
        const part1 = [...response.data.result.home_1.products]
        const part2 = [...response.data.result.home_3.products]
        let part3 = [...response.data.result.home_5.products]
        let part4 = [...response.data.result.home_2.products]
        let part5 = [...response.data.result.home_4.products]
        setProducts([...part1, ...part2, ...part3, ...part4, ...part5])
        console.log(response.status)

      })
      .catch(function (error) {
        // console.log(error);
      })
  }

  useEffect(() => {
    myData()
  }, [])

  function myFilter(event) {
    const filter = event.target.getAttribute('data-h')
    // console.log(item.category_title) 
    axios.get('https://one-api.ir/digikala/?token=745773:66ac97d10ec51&action=home')
      .then(function (response) {
        const part1 = [...response.data.result.home_1.products]
        const part2 = [...response.data.result.home_3.products]
        let part3 = [...response.data.result.home_5.products]
        let part4 = [...response.data.result.home_2.products]
        let part5 = [...response.data.result.home_4.products]
        setProducts([...part1, ...part2, ...part3, ...part4, ...part5].filter(item => item.category_title === filter))

      })
      .catch(function (error) {
        // console.log(error);
      })

  }
  //getting data from app end***

  //cart start
  function myABasketProduct(image, title, price, e, count, id) {
    //local storage onload
    cart.map((item) => {
      if (item.id === id) {
        e.target.setAttribute('data-status', 'off')
      }
    })
    //setting position the box of cart
    setLeft(false)
    //setting display the content of box cart -سبد شما خالی ست
    setShow(false)


    //first click
    if ((e.target.getAttribute('data-status') === 'on')) {
      //change status on-off to not adding more
      e.target.setAttribute('data-status', 'off')

      //adding cart
      let addingProduct = { image, title, price, count, id }
      //1 solution   
      // cart.push(addingProduct)
      // setCart([...cart]) 
      //2 solution 
      setCart([...cart, addingProduct])
      //local storage
      localStorage.setItem('oldCart', JSON.stringify([...cart, addingProduct]))
    }
    //second click
    else {
      //count plus
      cart.map((item, index) => {
        if (item.title === title) {
          item.count++
          setCart([...cart])
          //local storage
          localStorage.setItem('oldCart', JSON.stringify([...cart]))
        }
      })
    }
  }

  function myABasketProduct2(image, title, price, e, count, id) {  
    setVisibility(true)
    //setting position the box of cart
    setLeft(false)
    //setting display the content of box cart -سبد شما خالی ست
    setShow(false)
   if(cart.some(item=> item.title=== title)){
    cart.map((item, index) => {
      if (item.title === title) {
        item.count++
        setCart([...cart])
        //local storage
        localStorage.setItem('oldCart', JSON.stringify([...cart]))          
        }
    })
   }else{
    let addingProduct = { image, title, price, count, id }
    setCart([...cart, addingProduct])
    localStorage.setItem('oldCart', JSON.stringify([...cart, addingProduct]))
   }

  }

  function myPlus(title, e) {
    //count plus
    cart.map((item, index) => {
      if (item.title === title) {
        item.count++
        setCart([...cart])
        //local storage
        localStorage.setItem('oldCart', JSON.stringify([...cart]))
      }
    })
  }


  function myMinus(title, e) {
    cart.map((item, index) => {
      //Minus
      if (item.title === title) {
        if (item.count != 1) {
          item.count = item.count - 1
          setCart([...cart])
          //local storage
          localStorage.setItem('oldCart', JSON.stringify([...cart]))
        } //del
        else {
          document.getElementById(item.id).setAttribute('data-status', 'on')
          cart.splice(index, 1)
          setCart([...cart])
          //local storage
          localStorage.setItem('oldCart', JSON.stringify([...cart]))
        }
      }
    })
  }

  function myDel(title, e) {
    cart.map((item, index) => {
      if (item.title === title) {
        document.getElementById(item.id).setAttribute('data-status', 'on')
        cart.splice(index, 1)
        setCart([...cart])
        //local storage
        localStorage.setItem('oldCart', JSON.stringify([...cart]))
      }
    })
  }

  function myLeft() {
    setLeft(false)
  }


  return (
    <div className='bg-white'>
      <Header myCart={() => { setLeft(!left) }} cart={cart} />
      <Category />
      <Slider />
      <Fillter myFilter={myFilter} myData={myData} />
      <Product products={products} myABasketProduct={myABasketProduct} myABasketProduct2={myABasketProduct2} visibility={visibility} setVisibility={setVisibility}/>
      <FooterDesk myLeft={myLeft} />
      <Footerdev />
      <Basket left={left} show={show} cart={cart} myPlus={myPlus} myMinus={myMinus} myDel={myDel} myClose={() => { setLeft(true) }} />


    </div>
  )
}

export default App


