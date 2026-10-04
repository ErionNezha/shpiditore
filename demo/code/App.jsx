import React, { useEffect } from 'react';
import { useRoute } from './lib/router.js';
import { Header, Footer } from './components/Chrome.jsx';
import { Home } from './components/Home.jsx';
import { CityPage } from './components/CityPage.jsx';
import { ListingDetail } from './components/ListingDetail.jsx';
import { SubmitForm } from './components/SubmitForm.jsx';
import { HowItWorks } from './components/HowItWorks.jsx';

/* Routing SPA me query-string (?p=...), si te ÇmimRadar:
   ?p=home | ?p=qyteti&c= | ?p=shpia&id= | ?p=shto | ?p=si-funksionon */
export default function App() {
  const route = useRoute();

  // RREGULL: scrollTo GJITHMONË me bllok — kurrë return implicit (thyen React-in).
  useEffect(() => { window.scrollTo(0, 0); }, [route.page, route.c, route.id]);

  return (
    <>
      <Header />
      <main>
        {route.page === 'home' && <Home />}
        {route.page === 'qyteti' && <CityPage city={route.c || 'tirane'} />}
        {route.page === 'shpia' && <ListingDetail id={route.id} />}
        {route.page === 'shto' && <SubmitForm />}
        {route.page === 'si-funksionon' && <HowItWorks />}
      </main>
      <Footer />
    </>
  );
}
