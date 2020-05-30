import React from 'react';

import Layout from '../components/Layout';
import logo from '../assets/img/logo.png';
import pic0 from '../assets/images/0.jpg';
import pic6 from '../assets/images/pic06.jpg';
import pic7 from '../assets/images/7.jpg';
import pic8 from '../assets/images/clicker.jpg';
import pic9 from '../assets/images/boun.jpg';
import pic10 from '../assets/images/1.jpg';
import pic12 from '../assets/images/3.jpg';
import pic13 from '../assets/images/4.jpg';
import pic14 from '../assets/images/6.jpg';

import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner" style={{ height: '100vh' }}>
      <div className="inner">
        <div className="logo">
          <img src={logo} alt="logo" style={{ float: 'left' }}></img>
          <h2 style={{ textAlign: 'right' }}>{config.heading}</h2>
          <h1 style={{ textAlign: 'right' }}>{config.subHeading}</h1>
          <h1 style={{ textAlign: 'right' }}>{config.subHeading2}</h1>
        </div>
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <img style={{ width: '40vh' }} src={logo} alt="" />
          <div className="content">
            <h2 style={{ textAlign: 'left' }} className="major">
              À propos
            </h2>
            <p style={{ textAlign: 'left' }}>
              Symbios’Educ c’est avant tout pouvoir trouver ou retrouver un
              style de vie harmonieux avec son chien ou avec un chien médiateur
              grâce à une éducatrice spécialiste du comportement canin. Les
              méthodes d’éducation sont adaptées à tous dans le respect de
              l’homme et de l’animal. Symbios’Educ s’adresse aux particuliers et
              aux professionnels de la santé et du social.
            </p>
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <img
            style={{ height: '35vh', paddingRight: '3vh' }}
            src={pic12}
            alt=""
          />
          <div className="content">
            <h2 className="major">Présentation de l'équipe</h2>
            <p>
              Juliette Chofflet : brevet professionnel éducateur canin / Stages
              associations des chiens guides de l’est et des chiens médiateurs
              et d’utilité de l’est / Formation PECCRAM / Pratique sports
              canins : agility et obérythmée / DUT Carrières sociales.{' '}
            </p>

            <p>
              Bounty : Berger Australien de 14 ans à la retraite. Moteur du
              projet Symbios’Educ.
            </p>
          </div>
        </div>

        <div className="inner">
          <div className="content" style={{ float: 'left' }}>
            <center>
              <h2 style={{ textAlign: 'center' }} className="major">
                Prestations:
              </h2>
              <img
                style={{ height: '28vh', width: '28vh' }}
                src={pic13}
                alt=""
              />
              <img
                style={{ height: '28vh', width: '28vh' }}
                src={pic14}
                alt=""
              />
              <img
                style={{ height: '28vh', width: '28vh' }}
                src={pic9}
                alt=""
              />
              <img
                style={{ height: '28vh', width: '28vh' }}
                src={pic7}
                alt=""
              />
              <h2 className="major">
                Bilan comportemental et Séances d'éducation individuelles / Dog
                dancing / Initiation clicker-training / Médiation animale.
              </h2>
            </center>
          </div>
        </div>

        <div className="inner">
          <img
            style={{ height: '40vh', width: '50vh' }}
            className="image"
            src={pic0}
            alt=""
          />
          <div className="content">
            <h2 className="major">Education bilan et séance :</h2>
            <p>
              {' '}
              Eduquer son chien est indispensable pour avoir un équilibre dans
              son quotidien c’est-à-dire un chien bien dans ses pattes et donc
              des comportements indésirables sous contrôle (destruction,
              malpropreté, fugue…) pour cela il est important d’avoir une bonne
              compréhension de son chien (communication, besoins…) pour pouvoir
              avancer avec lui en créant une confiance et un respect mutuel.
            </p>

            <p>
              Vous voulez commencer sur des bonnes bases avec un chiot, un chien
              que vous avez adopté en refuge ou alors vous rencontrez des
              difficultés avec votre compagnon. Je vous invite à me contacter
              pour échanger avec vous.
            </p>

            <h1>Qu’est-ce qu’un Bilan comportemental ?</h1>
            <p>
              Le bilan est la première étape de la prise en charge. Il permet
              d’établir le profil comportemental de votre chien en s’intéressant
              à différents aspects de sa vie. Le bilan se déroule à votre
              domicile. Il dure environ de 1h à 2h. Tarif : 65 €
            </p>
            <h1>Comment fonctionne les séances d’éducation individuelle ?</h1>
            <p>
              A la suite du bilan un programme d’éducation personnalisé
              répondant à votre problématique vous ai proposé pour vous et votre
              chien. Le programme se compose généralement de 5 à 10 séances avec
              des objectifs bien précis (par exemple : création de la
              complicité, rappel efficace, apprentissage de la solitude...). En
              fonction de vos besoins elles se déroulent dans différents
              environnements (ville, parc, forêt et domicile). Une séance dure
              1h Tarif : 40 €
            </p>
          </div>
        </div>

        <div className="inner">
          <img className="image" src={pic6} alt="" />
          <div className="content">
            <h2 className="major">Dog dancing</h2>
            <p>
              {' '}
              Cette discipline aussi appelée obérythmée consiste à réaliser une
              chorégraphie en musique en enchaînant plusieurs mouvements nommés
              tricks (passer entre les jambes, faire le beau, tourner…). Les
              thèmes des chorégraphies et les enchainements sont très variables
              (adaptation en fonction du chien) et n’ont pour seule limite que
              l’imagination.
            </p>
            <p>Il existe 2 styles :</p>
            Le freestyle : Travail à distance
            <p>
              Heelwork to music (HTM) : Travail près du maître (ne pas
              s’éloigner de plus de 2 m). <br /> 10 positions sont imposées.
            </p>
            <p>
              Ce sport permet de développer la complicité et la réflexion
              mentale de votre chien.
              <br />
              Cours : débutant jusqu'à avancé.
            </p>
            <p>
              Tarif journée: 60€ par personne | Tarif demi-journée: 30€ par
              personne.
            </p>
          </div>
        </div>
        <div className="inner">
          <img style={{ height: '35vh' }} className="image" src={pic8} alt="" />
          <div className="content">
            <h2 className="major">Initiation clicker-training</h2>
            <p>
              Découverte d’une méthode d’éducation dite positive qui consiste à
              capter les comportements favorables de l’animal à l’aide notamment
              d’un boitier qui produit un bruit spécifique. Le click est le pont
              entre le comportement et la récompense. On motive le chien à
              coopérer avec nous. Le clicker training peut être utilisé pour
              différentes choses telles que les sports canins, le
              medical-training, la rééducation comportementale par exemple. De
              plus le clicker n’est pas uniquement reservé au chien, pleins
              d’autres espéces peuvent travailler ainsi.
            </p>
            <p>Tarif journée: 60€ par personne.</p>
          </div>
        </div>

        <div className="inner">
          <img className="image" src={pic10} alt="" />
          <div className="content">
            <h2 className="major">Médiation animale</h2>
            <p>
              La médiation animale ou zoothérapie est une thérapie qui consiste
              à faire intervenir un animal préalablement choisi et entraîné afin
              d’intervenir auprès de personnes dont les besoins ou les
              pathologies ont été ciblés. Celui-ci est encadré par un
              professionnel spécialisé auprès de personnes souffrant de troubles
              mentaux, physiques ou sociaux pour réduire le stress, les
              conséquences d’un traitement médical, …
            </p>
            <p>
              Je vous propose un accompagnement personnalisé dans la création et
              le développement de projet de médiation animale directement dans
              vos structures sociales et médico-sociales.{' '}
            </p>
            <p>Tarif: me contacter pour un devis.</p>
          </div>
        </div>
      </section>

      <section id="two" className="  spotlight style2">
        <div className="inner">
          <div style={{ paddingLeft: '5vh' }} className="content">
            <h2>Horaires:</h2>
            <p>
              Lundi mardi de 9h à 19h
              <br />
              Mercredi de 9h à 17h <br />
              Jeudi vendredi de 9h à 19h <br />
              Samedi de 9h à 12h
            </p>
            <h2 className="major">Zone Géographique</h2>
            <p>Valence et alentours (rayon de 50km)</p>
            <h2 className="major">Me contacter</h2>
            <p>Mail: symbios.educ@gmail.com</p>
            <p>Tél: 0635674530</p>
          </div>
        </div>
      </section>
      <footer style={{ textAlign: 'center' }}>Symbios'Educ ©2020</footer>
    </section>
  </Layout>
);

export default IndexPage;
