import React, { Component } from 'react'
class Hovedside extends Component {
  componentWillLeave () {
    console.log('Component will leave')
  }
  render () {
    return (
      <div>
        <h2>Bestseller A/S</h2>
        <p>BESTSELLER.com er en modebutik på nettet for kvinder, mænd og børn.
           Med mere end 25.000 produkter og 3.000 nye styles om ugen kan vi give 
           dig fast fashion til alle anledninger. BESTSELLER.com giver dig den 
           største og nyeste kollektion af styles fra ONLY, VERO MODA, JACK & JONES,
            SELECTED HOMME/FEMME og mange andre brands fra BESTSELLERs brandportefølje.
             Vi kombinerer den seneste mode med redaktionelt inspirerende indhold på 
             en platform, hvor du kan købe alle BESTSELLERs brands i én butik..</p>
        <p>Om BESTSELLER</p>
      </div>
    )
  }
}

export default Hovedside
