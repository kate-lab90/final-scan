import css from './Benefit.module.scss'
import watch from '../../../../../assets/img/watch.svg'
import loupe from '../../../../../assets/img/loupe.svg'
import shield from '../../../../../assets/img/shield.svg'

function Slide(props) {
  const imageArr = [
    {name: 'watch', image: watch},
    {name: 'loupe', image: loupe},
    {name: 'shield', image: shield}
  ]
  const {img, text} = props

  const generatedImage = imageArr.find(item => item.name === img)?.image || watch

    return (
        <div className={css.slide}>
            <img className={css.img} src={generatedImage}  alt={img} />
            <p className={css.text}>{text}</p>
        </div>
     );
}

export default Slide;