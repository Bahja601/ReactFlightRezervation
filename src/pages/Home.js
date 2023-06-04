import React, { useState, useRef } from 'react';
import  { useReactToPrint} from 'react-to-print';
import { useDispatch, useSelector } from "react-redux";
import { addProduct, deleteProduct } from "../redux/productsSlice";
import { useProductsListener } from "../config/firebase";
import "./App.css";
import StripeCheckout from 'react-stripe-checkout';
import Button from 'react-bootstrap/Button';



export default function Home() {
  useProductsListener();

  const dispatch = useDispatch();

  const componentRef= useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'ucus-bilgisi',
    onafterprint: () => alert("Başarıyla bastırıldı.")
  });

  const products = useSelector((state) => state.products.products);


  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [airline, setAirline] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [matchingFlights, setMatchingFlights] = useState([]);

  const handleOriginChange = (e) => {
    setOrigin(e.target.value);
  };

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  const handleDepartureDateChange = (e) => {
    setDepartureDate(e.target.value);
  };

  const handleAirlineChange = (e) => {
    setAirline(e.target.value);
  };

  const handleReturnDateChange = (e) => {
    setReturnDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredFlights = flights.filter(
      (flight) => flight.departureDate === departureDate && flight.origin === origin && flight.destination === destination
    );

    setMatchingFlights(filteredFlights);
  };

  function onToken(token){
    console.log(token)
  }

  const flights = [
    {
      origin: 'İstanbul',
      destination: 'İzmir',
      airline: 'THY',
      departureDate: '2023-06-15',
      departureTime: '13:00',
      price: '1700 TL',
      seat: '2',
    },
    {
      origin: 'İstanbul',
      destination: 'İzmir',
      airline: 'Pegasus',
      departureDate: '2023-06-21',
      departureTime: '11:00',
      price: '1400 TL',
      seat: '13',
    },
    {
      origin: 'İstanbul',
      destination: 'Antalya',
      airline: 'THY',
      departureDate: '2023-06-11',
      departureTime: '06:00',
      price: '600 TL',
      seat: '9',
    },
    {
      origin: 'İstanbul',
      destination: 'Ankara',
      airline: 'Pegasus',
      departureDate: '2023-07-02',
      departureTime: '07:00',
      price: '900 TL',
      seat: '6',
    },
    {
      origin: 'İzmir',
      destination: 'İstanbul',
      airline: 'AnadoluJet',
      departureDate: '2023-07-02',
      departureTime: '07:30',
      price: '1100 TL',
      seat: '9',
    },
    {
      origin: 'İzmir',
      destination: 'Antalya',
      airline: 'AnadoluJet',
      departureDate: '2023-07-01',
      departureTime: '11:00',
      price: '500 TL',
      seat: '2',
    },
    {
      origin: 'İzmir',
      destination: 'Ankara',
      airline: 'Pegasus',
      departureDate: '2023-06-27',
      departureTime: '14:00',
      price: '700 TL',
      seat: '2',
    },
    {
      origin: 'Antalya',
      destination: 'İstanbul',
      airline: 'THY',
      departureDate: '2023-06-19',
      departureTime: '06:00',
      price: '1900 TL',
      seat: '3',
    },
    {
      origin: 'Antalya',
      destination: 'İzmir',
      airline: 'Pegasus',
      departureDate: '2023-07-11',
      departureTime: '09:00',
      price: '700 TL',
      seat: '1',
    },
    {
      origin: 'Antalya',
      destination: 'Ankara',
      airline: 'THY',
      departureDate: '2023-06-23',
      departureTime: '06:00',
      price: '900 TL',
      seat: '4',
    },
    {
      origin: 'Ankara',
      destination: 'İstanbul',
      airline: 'Pegasus',
      departureDate: '2023-07-03',
      departureTime: '17:00',
      price: '1200 TL',
      seat: '7',
    },
    {
      origin: 'Ankara',
      destination: 'İzmir',
      airline: 'THY',
      departureDate: '2023-07-23',
      departureTime: '19:00',
      price: '700 TL',
      seat: '8',
    },
    {
      origin: 'Ankara',
      destination: 'Antalya',
      airline: 'AnadoluJet',
      departureDate: '2023-07-14',
      departureTime: '13:00',
      price: '900 TL',
      seat: '4',
    },
    


  ];
  return (
    <section className='hero'>
      <div className="flight-search-container" ref={componentRef}>
      <Button  onClick={handlePrint} className='b12'>Yazdır</Button>
        <h2>Bilet Arama</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">

            <label htmlFor="origin" className="homepage-title">Kalkış Noktası</label>
            <select id="origin" value={origin} onChange={handleOriginChange} className='homepage-input'>
              <option value="">Seçiniz</option>
              <option value="İstanbul">İstanbul</option>
              <option value="İzmir">İzmir</option>
              <option value="Antalya">Antalya</option>
              <option value="Ankara">Ankara</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="destination" className="homepage-title">Varış Noktası</label>
            <select id="destination" value={destination} onChange={handleDestinationChange} className='homepage-input'>
              <option value="">Seçiniz</option>
              <option value="İstanbul">İstanbul</option>
              <option value="İzmir">İzmir</option>
              <option value="Antalya">Antalya</option>
              <option value="Ankara">Ankara</option>
            </select>
          </div>
          <div className="form-group">
          <label htmlFor="airline">Havayolu</label>
          <select id="airline" value={airline} onChange={handleAirlineChange} className='homepage-input'>
            <option value="">Seçiniz</option>
            <option value="THY">THY</option>
            <option value="Pegasus">Pegasus</option>
            <option value="AnadoluJet">AnadoluJet</option>
          </select>
        </div>
          <div className="form-group">
            <label htmlFor="departure-date" className="homepage-title">Kalkış Tarihi</label>
            <input type="date" id="departure-date" value={departureDate} onChange={handleDepartureDateChange} className='homepage-input' />
          </div>
          <button type="submit">Ara</button>
        </form>

        {matchingFlights.length > 0 && (
          <div className="flight-results">
            <h3>Bilet Sonuçları</h3>
            <ul>
              {matchingFlights.map((flight, index) => (
                <li key={index}>
                  <p>Havayolu: {flight.airline}</p>
                  <p>Kalkış Günü: {flight.departureDate}</p>
                  <p>Varış Günü: {flight.departureDate}</p>
                  <p>Saat: {flight.departureTime}</p>
                  <p>Fiyat: {flight.price}</p>
                  <p>Boş Koltuklar: {flight.seat}</p>
                  <StripeCheckout
                  token={onToken}
                  stripeKey='pk_test_51NBczTCTITMcQttMi9jD0uKK0XEhcb6PekTiKQSmFQz0leFNOOyLZR1JQnCycnJafEbnhnWIzK9D9znTAXgLA11F00lP7bIod3'/>   
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );


  


}
