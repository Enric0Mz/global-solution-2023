import { Navigate } from 'react-router-dom';
import Header from '../Header/Header';
import '../../scss/Main.scss';
import main from '../../images/pexels-pixabay-40751.jpg'
import athlete from '../../images/pexels-pixabay-159515.jpg'
import basketball from '../../images/pexels-laoye-oluwatobi-19083788.jpg'
import footbal from '../../images/pexels-rdne-stock-project-7188092.jpg'


function Main() {
    const isAuthorized = localStorage.getItem('authorized') === 'true';
    if (!isAuthorized) {
        return <Navigate to="/login" />;
    }

    return (
        <div>
            <Header />
            <div className='container-master'>
                <div className='main-container'>
                    <div className='main-section'>
                        <img src={main} alt='Atleta em atividade' />
                        <div className='main-content'>
                            <h2>Otimização Esportiva Personalizada</h2>
                            <p>Bem-vindo à revolucionária abordagem de otimização esportiva personalizada! Nosso foco é elevar a experiência esportiva dos atletas em várias modalidades, como futebol, basquete, natação, skate, entre outras. Oferecemos atendimento personalizado, abrangendo treinamento físico, dieta e prevenção de lesões.</p>
                        </div>
                        <button className="info-button">Mais informações</button>
                    </div>
                    <div className='info-section'>
                        <div className='info-content'>
                            <h2>O que é a abordagem</h2>
                            <p>Este sistema é um programa completo de aprimoramento esportivo personalizado, projetado para atender às necessidades individuais de cada atleta. Consideramos fatores como físico, histórico esportivo e nível de experiência para proporcionar um programa abrangente e adaptado.</p>
                        </div>
                        <div className='info-content'>
                            <h2>Seus benefícios</h2>
                            <p>Visa melhorar o desempenho esportivo, oferecendo programas de treinamento e planos nutricionais personalizados para cada atleta. Além disso, focamos na prevenção de lesões, garantindo uma jornada esportiva saudável e sustentável a longo prazo.</p>
                        </div>
                        <div className='info-content'>
                            <h2>Como funciona</h2>
                            <p>Baseia-se em avaliações individualizadas, dietas adaptadas, programas de treinamento personalizados e estratégias de fisioterapia preventiva. Integramos ciência, tecnologia e paixão pelo esporte para oferecer uma experiência única e eficaz.</p>
                        </div>
                    </div>
                </div>
                <h2>Vantagens</h2>
                <div className='additional-section'>
                    <div className='additional-element'>
                        <img src={athlete} alt='Atleta em atividade' />
                        <div className='additional-content'>
                            <h2>01</h2>
                            <h3>Desempenho Aprimorado</h3>
                            <p>Maximizamos o potencial atlético de cada indivíduo, promovendo melhorias significativas no desempenho esportivo através de programas personalizados.</p>
                        </div>
                    </div>
                    <div className='additional-element'>
                        <img src={basketball} alt='Atleta em atividade' />
                        <div className='additional-content'>
                            <h2>02</h2>
                            <h3>Prevenção de Lesões</h3>
                            <p>Focamos na identificação e mitigação de potenciais pontos fracos, reduzindo o risco de lesões e prolongando a carreira esportiva.</p>
                        </div>
                    </div>
                    <div className='additional-element'>
                        <img src={footbal} alt='Atleta em atividade' />
                        <div className='additional-content'>
                            <h2>03</h2>
                            <h3>Saúde Geral</h3>
                            <p>Valorizamos a saúde global dos atletas, garantindo um equilíbrio adequado entre treinamento, nutrição e recuperação para uma jornada esportiva sustentável.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );    
}

export default Main;
