import './Mova.css'
import Nav from '../../components/Nav/Nav'
import ProjectHeader from '../../components/ProjectHeader/ProjectHeader'
import {ProjectText, ProjectTextEn} from '../../components/ProjectText/ProjectText'
import Footer from '../../components/Footer/Footer'
import NextProject from '../../components/NextProject/NextProject'

function Mova() {

  return (
    <div className='Mova'>
        <Nav/>

        <main className='project'>
          <ProjectHeader
            name='Mova'
            logo='/portfolio-designer/project/Mova/logo.svg'
            img='/portfolio-designer/project/Mova/cover.jpg'
            description={<>
            Mova ist ein Online-Shop-Konzept für handgefertigte Keramikvasen, das ein digitales Zuhause schafft, das genauso ruhig und zeitlos wirkt wie die Produkte selbst.
            <br /><br />
            Bei Mova werden Wert und Qualität ernst genommen. Ein Geschäft, das nicht nur den Einkauf erleichtert, sondern auch die Ästhetik der Marke durch visuelle Sprache kommuniziert.
            <br /><br />
            Mein Ziel war es, Ehrlichkeit in den digitalen Raum zu bringen. Klares Layout, intuitive Navigation, nur das Notwendige.
            </>}
            descriptionEn={<>
            Mova is an e-commerce concept for handcrafted ceramic vases, creating a digital home that feels just as calm and timeless as the products themselves.
            <br /><br />
            At Mova, value and quality are taken seriously. A store that not only makes shopping easier, but also communicates the brand's aesthetic through visual language.
            <br /><br />
            My goal was to bring honesty into the digital space. Clean layout, intuitive navigation, only what's necessary.
            </>}
          />

          <img className='img-project no-mobile' src="/portfolio-designer/project/Mova/bilder/01.png" alt="bild" />
          <img className='img-project only-mobile' src="/portfolio-designer/project/Mova/bilder/02.png" alt="bild" />

          <ProjectText
            textTitel='Ästhetik. Erdig. Zeitlos'
            textSubtitel='Design'
            textParagraph={<>
            Für das Design habe ich eine warme und erdige Bildsprache entwickelt, die die natürliche Ruhe der handgefertigten Vasen widerspiegelt.
            <br /><br />
            Die zwei Blautöne in der Palette wurden bewusst für einen Hauch von Eleganz und Sanftheit gewählt, während die erdigen Farben die organischen Formen der Kollektionen betonen und dieselbe Klarheit und Beständigkeit vermitteln, die auch die Marke selbst verkörpert.
            </>}
          />

          <ProjectTextEn
            textTitel='Aesthetic. Earthy. Timeless'
            textSubtitel='Design'
            textParagraph={<>
            For the design, I developed a warm and earthy visual language that reflects the natural calm of the handcrafted vases.
            <br /><br />
            The two shades of blue in the palette were deliberately chosen for a touch of elegance and softness, while the earthy tones highlight the organic shapes of the collections and convey the same clarity and consistency that the brand itself embodies.
            </>}
          />


          <img className='img-project only-mobile' src="/portfolio-designer/project/Mova/bilder/06.png" alt="bild" />

          <img className='img-project padding no-mobile' src="/portfolio-designer/project/Mova/bilder/03.png" alt="bild" />
          <img className='img-project padding only-mobile' src="/portfolio-designer/project/Mova/bilder/04.png" alt="bild" />

          
          <img className='img-project no-mobile' src="/portfolio-designer/project/Mova/bilder/05.png" alt="bild" />


          <img className='img-project padding no-mobile' src="/portfolio-designer/project/Mova/bilder/07.png" alt="bild" />
          <img className='img-project padding only-mobile' src="/portfolio-designer/project/Mova/bilder/08.png" alt="bild" />



          <NextProject thisProject='Mova'/>

        </main>

        <Footer/>
    </div>
  )
}

export default Mova