import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "../Grid/GridContainer.jsx";
import GridItem from "../Grid/GridItem.jsx";

import productStyle from "./productStyle.jsx";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    const productData = [
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.aardvark-pro.com/">Aardvark</a>, Description: 'HD recording, word clock, D.As'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.adam-audio.de/">ADAM</a>, Description: 'studio monitors'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.akaipro.com/">Akai Professional</a>, Description: 'audio processors, digital editors'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.akg.com/">AKG</a>, Description: 'audio processors and digital editors'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.alesis.com/">Alesis</a>, Description: 'speakers, signal processing, recorders, Mixers'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.altronic.com/">Altronic</a>, Description: 'dummy loads'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.antarestech.com/">Andrew</a>, Description: 'antennas, transmission cable, connectors'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.aphex.com/">Aphex</a>, Description: 'signal processing'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.apogeedigital.com/">Apogee</a>, Description: 'AD/DA converters'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.apple.com/ca/">Apple</a>, Description: 'computers,peripherals'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.ashly.com/">Ashly</a>, Description: 'equalizers, poweramps, crossovers'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.atiguys.com/">ATI</a>, Description: 'amplifiers, distribution amplifiers'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.atlassound.com/">Atlas</a>, Description: 'microphone stands and booms'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.audio-technica.com/index2.html">Audio Technica</a>, Description: 'microphones'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.auralex.com/">Auralex</a>, Description: 'Acoustic foam & treatment'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.avalondesign.com/">Avalon</a>, Description: 'pre-amps'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.avpmfg.com/">AVP</a>, Description: 'patching systems'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.provo.ca/bl.asp">B &amp; L</a>, Description: 'coaxial connectors'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.bagend.com/">Bag End</a>, Description: 'speakers, sub-woofers, processors'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.belar.com/">Belar</a>, Description: 'RF monitors'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.benchmarkmedia.com/">Bench Mark</a>, Description: 'audio amplifiers and pre-amps'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.behringer.com/index.cfm?lang=eng">Beringher</a>, Description: 'mixers, processing'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.powerware.ca.com/">Best</a>, Description: 'see PowerWare'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.beyerdynamic.com/">Beyer</a>, Description: 'microphones and headphones'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.bird-electronic.com/">Bird</a>, Description: 'wattmeters, RF loads'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.bitheadz.com/">BitHeadz</a>, Description: 'software based processors and plug-ins'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://blondertongue.com/">Blonder Tongue</a>, Description: 'CATV products'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.bluemic.com/">Blue Microphones</a>, Description: 'high quality condenser microphones'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.abluesky.com/">Blue Sky</a>, Description: '2.1, 5.1  THX monitors'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.brainstormtime.com/">Brainstorm Electronics</a>, Description: 'time code solutions'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.brtbcanada.com/">BRTB</a>, Description: 'Custom cables, microphone, multi-track, interface and power cables'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.brycoproducts.com/">Bryco</a>, Description: 'audio/video tape storage'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.bryston.ca/">Bryston</a>, Description: 'amplifiers, pre-amps'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.bss.co.uk/">BSS</a>, Description: 'compressors, processing'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.burk.com/">Burk Technology</a>, Description: 'transmitter remote control'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.buzz-audio.com/">Buzz Audio</a>, Description: 'microphone pre-amps'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.canare.com/">Canare</a>, Description: 'microphone cable, audio/video connectors, video patch panels'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.clearcom.com/">Clearcom</a>, Description: 'intercoms'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.clydesdalecases.com/">Clydesdale</a>, Description: 'custom cases'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.coaxial.com/">Coaxial Dynamics</a>, Description: 'wattmeters, dummy loads'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.hhb.co.uk/">Coles</a>, Description: 'microphones'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.comrex.com/">Comrex</a>, Description: 'remote consoles, frequency extenders, ISDN and POTS codecs'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.comtek.com/">Comtek</a>, Description: 'wireless IFBs'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.conex-electro.com/">Conex</a>, Description: 'tone generators and sensors'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.countryman.com/">Countryman</a>, Description: 'microphones'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.crownaudio.com/">Crown</a>, Description: 'amplifiers, PCM microphones'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.crownbroadcast.com/">Crown/IREC</a>, Description: 'FM Transmitters'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.dangerousmusic.com/">Dangerous Music</a>, Description: 'Summing amps, monitoring & metering'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.dbxpro.com/">DBX</a>, Description: 'audio signal processing'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.ddaconsoles.com/">DDA</a>, Description: 'recording and sound reinforcement consoles'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.delcowire.com/">Delco</a>, Description: 'wires and cables'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.denon.com/">Denon</a>, Description: 'cd cart players and recorders'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.dielectric.com/index.html">Dielectric</a>, Description: 'TV and FM antennas, transmission hardware'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.digiflexcables.com/">Digiflex</a>, Description: 'patchcords'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.digitalaudio.com/">Digital Audio Labs</a>, Description: 'PC sound cards, digital editing software'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.dixonsystems.com/">Dixon Systems</a>, Description: 'news room mixers, consoles'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.dk-audio.dk/">DK Audio</a>, Description: 'analogue/digital master displays'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.dnfcontrols.com/">DNF Industries</a>, Description: 'VTR controllers'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.dorrough.com/">Dorrough</a>, Description: 'loudness audio meters'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.dpamicrophones.com/">DPA</a>, Description: 'microphones'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.drawmer.com/">Drawmer</a>, Description: 'dynamic signal processing'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.dynaudioacoustics.com/">Dynaudio Acoustics</a>, Description: 'monitor speakers'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.emu.com/">E-MU</a>, Description: 'samplers'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.echoaudio.com/">Echo</a>, Description: 'sound cards and interfaces'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Eimac">Eimac</a>, Description: 'tubes and sockets'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.electro-impulse.com/">Electro-Impulse</a>, Description: 'dummy loads'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.eviaudio.com/">Electro-Voice</a>, Description: 'microphones, speakers and mixers'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.empiricallabs.com/">Empirical Labs</a>, Description: 'Distressor, Fatso, Lil FrEQ'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.emu.com/">Ensoniq</a>, Description: 'digital audio software'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.eriinc.com/">ERI</a>, Description: 'FM/TV Antenna, Towers'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.ese-web.com/">ESE</a>, Description: 'clocks and timers'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.eventide.com/">Eventide</a>, Description: 'harmonizers, delays, signal processing'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.focusrite.com/">Focusrite</a>, Description: 'microphone pre amps, channel strip'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.fostex.com/">Fostex</a>, Description: 'recording equipment, headphones, speakers'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.ucik.com/Friend-Chip/index.htm">Friend-Chip Studio Electronics</a>, Description: 'digital audio routers and format converters'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.furmansound.com/">Furman</a>, Description: 'signal processing'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.futuresonics.com/">Future Sonics</a>, Description: 'in-ear monitoring'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.gatorcases.com/">Gator</a>, Description: 'cases, racks'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.genelec.com/">Genelec</a>, Description: 'speakers'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.groovetubes.com/">Groove Tubes</a>, Description: 'vipre microphone pre amp'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.hafler.com/">Hafler</a>, Description: 'audio amplifiers'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.harris.com/">Harris Corp</a>, Description: 'AM/FM/TV/IBOC Transmitters'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.heartechnologies.com/">Hear Technologies</a>, Description: 'talk back, hear back systems'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.hhb.co.uk/">HHB</a>, Description: 'speakers, processing, recording media'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.homeworthyproducts.com/">Homeworthy</a>, Description: 'custom studio furniture and racks'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.inovon.com/">Inovonics</a>, Description: 'A/V displays, processing'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.jampro.com/">Jampro</a>, Description: 'TV and FM antennas and combiners'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.jblpro.com/">JBL</a>, Description: 'monitor speakers'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.jkaudio.com/">JK Audio</a>, Description: 'teleco modules, mixers'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.jlcooper.com/">JL Cooper</a>, Description: 'control surfaces'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.joemeek.com/">Joemeek</a>, Description: 'processing'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.k-m.de/">K &amp; M</a>, Description: 'microphone and music stands'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.kamesan.info/">Kamesan</a>, Description: 'location mixers'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.klarkteknik.com/">Klark-Teknik</a>, Description: 'processing equipment'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.kramerelectronics.com/">Kramer</a>, Description: 'switchers, DAs'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.lexicon.com/">Lexicon</a>, Description: 'audio processing'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.line6.com/">Line 6</a>, Description: 'POD, guitar processing and amps'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.littlite.com/">Littlite</a>, Description: 'lamps'},
      {Business: <a target="_blank" rel="noopener noreferrer" href="http://www.logitekaudio.com/">Logitek</a>, Description: 'consoles, meters'},
    ];
    const items = productData.map((item, key) =>
      <li key={item.id}>{item.Business} | {item.Description}</li>
    );
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem id="product-table" xs={12} sm={12} md={8}>
            <ul className={classes.listreset}>
              {items}
            </ul>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
