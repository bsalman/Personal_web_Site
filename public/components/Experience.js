import React from 'react';

class Experience extends React .Component{
    render(){
        return(
            // EXperience section //
            <div className="experience_container">
              <p className="h2">Berufserfahrung</p>
              <hr/>
    
              <div className="expCards">
                <div className="f_section">
                  <div className="d1">
                    <h2>Überbrückung Tätigkeit</h2>
                    <h3>Toom Bau Markt 02/2019-07/2019 </h3>
                    <p>Aufgaben</p>
                    <ul>
                      <li>Lager Arbeiten</li>
                      <li>Feinkontrolle für neue Waren</li>
                    </ul>
                  </div>
                  <div className="d2">
                    <h2>Kundenberater</h2>
                    <h3>Arab Bank-Syrien 12/2014-08/2015 </h3>
                    <p>Aufgaben</p>
                    <ul>
                      <li>Bankkonten erstellen</li>
                      <li>Kreditfolgearbeiten, u. a. Kundenbetreuung,
                        Vertragsverwaltung und
                        Zahlungsverkehrsabwicklung</li>
                      <li>Einarbeitung und Ausbildung neuer
                        Angestellter</li>
                    </ul>
                  </div>
    
                </div>
                <div className="d3">
                  <h2>Kundenberater</h2>
                  <h3>Mobile Telekommunikation Network/MTN<br/> Syrien 11/2006-08/2014 </h3>
                  <p>Aufgaben</p>
                  <ul>
                    <li>Kundenberatung und Verkäufer</li>
                    <li>Planung und Organisation, Auftrags- und
                      Rechnungsbearbeitung,<br/> Erteilung von
                      Auskünften und Anlegung und Führung von
                      Registern und Akte.
                    </li>
                    <li>Kundenbetreuung im Standard- und VIPSegment</li>
                    <li>Einarbeitung und Ausbildung neuer
                      Angestellter</li>
                  </ul>
                </div>
              </div>
            </div>
        )
    }
}
export default Experience