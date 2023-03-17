import React, { useEffect, useState } from "react";
const Context = React.createContext();

function Provider({ children }) {
  const [data, setdata] = useState([]);
  const [loder, setloder] = useState(true);

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("arr"))) {
      fetch("https://dummyjson.com/products?limit=0")
        .then((res) => res.json())
        .then((json) =>
          setdata(
            json.products.map((ele) => {
              return {
                ...ele,
                loved: false,
                cart: false,
                lovedate: "",
                amount: 1,
                totle:
                  ele.price -
                  Math.floor(ele.price * (ele.discountPercentage / 100)),
              };
            })
          )
        );
    } else {
      setdata(JSON.parse(localStorage.getItem("arr")));
    }
  }, []);
  function addTocart(id) {
    console.log(id);
    setdata((prev) => {
      return prev.map((ele) => {
        return +ele.id === id ? { ...ele, cart: !ele.cart, amount: 1 } : ele;
      });
    });
  }
  useEffect(() => {
    localStorage.setItem("arr", JSON.stringify(data));
  }, [data]);
  function favorite(id) {
    const newdate = new Date();
    const date = `liked on ${newdate.getDate()}/${newdate.getDay()}/${newdate.getFullYear()} at ${newdate.getHours()}:${newdate.getMinutes()}:${newdate.getSeconds()}`;
    setdata((prev) => {
      return prev.map((ele) => {
        return +ele.id === id
          ? { ...ele, loved: !ele.loved, lovedate: date }
          : ele;
      });
    });
  }
  const [favedta, setFavData] = useState([]);
  useEffect(() => {
    setFavData(
      data.filter((ele) => {
        return ele.loved === true;
      })
    );
  }, [data]);
  const [car, setCar] = useState([]);
  useEffect(() => {
    setCar(
      data.filter((ele) => {
        return ele.cart === true;
      })
    );
  }, [data]);
  const [ch, setCh] = useState(false);
  function zero() {
    setCh(true);
    setTimeout(() => {
      setdata((prev) => {
        return prev.map((ele) => {
          return { ...ele, cart: false };
        });
      });
      setCh(false);
    }, 1000);
  }
  return (
    <Context.Provider
      value={{ data, addTocart, favorite, favedta, car, setdata, zero, ch }}
    >
      {children}
    </Context.Provider>
  );
}

export { Provider, Context };
