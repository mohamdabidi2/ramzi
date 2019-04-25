import React, { Component } from 'react';
import '../../../App.css'
class Affi extends Component {
    constructor(props){
    super(props)
    this.state = { 
        theOrg : [
            {
              name: 'AIESEC',
              image: 'http://jamaity.org/wp-content/uploads/2014/06/aiesec.jpg',
              desc: 'AIESEC est une organisation internationale, apolitique, indépendante et à but non lucratif, entièrement gérée par des étudiants et par des récents diplômés du supérieur. Elle est membre du comité permanent de l UNESCO et serait la plus grande organisation estudiantine dans le monde',
              bgColor: '#003399'
            },
            {
              name: 'JUNIOR ENTREPRENEUR',
              image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/JE_logo.png/220px-JE_logo.png',
              desc: 'Les Junior-Entreprises sont des associations à vocation économique et pédagogique, à but non lucratif. Associations étudiantes implantées dans les établissements d’enseignement supérieur, les Junior-Entreprises se définissent comme un vecteur d’employabilité et d’engagement des étudiants',
              bgColor: 'black'
            },
            {
              name: 'UNITED NATION',
              image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_the_United_Nations.svg/1200px-Flag_of_the_United_Nations.svg.png',
              desc: 'L’Organisation des Nations unies est une organisation internationale regroupant 193 États. La Charte des Nations unies est adoptée le 26 juin 1945 par 51 États, en remplacement de la Société des Nations. Elle entre officiellement en vigueur le 24 octobre 1945',
              bgColor: '#3F90DF'
            }
          ]}
     }
    render() { 
        return ( 
            <div className="comp" >
                {this.state.theOrg.map((item)=>{
                    return(
                        <div className="organisation" style={{backgroundColor: item.bgColor}}>
                            <img src={item.image} className="logopng"/>
                            <h1 className="ti">{item.name}</h1> 
                            <p className="desc">{item.desc}</p>
                        </div>
                    )
                })}
            </div>
         );
    }
}
 
export default Affi;