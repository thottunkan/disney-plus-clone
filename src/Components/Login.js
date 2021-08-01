import styled from 'styled-components'
const Login = (props)=>{
    return (
        <Container>
            <Content>
                <BgImage>
                <CTA>
                    <CTALogoOne src="/Images/cta-logo-one.svg" />
                    <SignUP>GET ALL THERE</SignUP>
                    <Description>
                        Get Premier Access to Raya and the Last Dragon for an Additional
                        free with a Disney+ Subsciption As of 18/7/21. The Price of Disney+
                        and The Disney Bundle will increase by $1.
                    </Description>
                    <CTALogoTwo src="/Images/cta-logo-two.png" />
                </CTA>
                </BgImage>
            </Content>
        </Container>
    );
}

const Container = styled.section`
   display:flex;
   overflow: hidden;
   flex-direction:column;
   text-align:center;
   height:100vh;
`;

const Content = styled.div`
    margin-bottom:10vw;
    width:100%;
    position:relative;
    min-height: 100vh;
    box-sizing:border-box;
    display:flex;
    justify-content:center;
    flex-direction:column;
    padding: 80px 40px;
    height:100%;
`;

const BgImage = styled.div`
    background-image: url("/Images/login-background.jpg");
    background-size:cover;
    height:100%;
    background-position: top;
    background-repeat:no-repeat;
    top :0;
    left : 0;
    z-index: -1;
`;

const CTA = styled.div`
    margin-top: 20vh;
    margin-bottom:2w;
    max-width: 650px;
    flex-wrap:wrap;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    
    text-align:center; 
    margin-right:auto;
    margin-left:auto;
    transition-timing-function:ease-out;
    
    width:100%;
    &:hover{
        background-color: #0483ee;
    }
  
`;

const CTALogoOne = styled.img`
    
    margin-bottom:12px;
    max-width:600px;
    min-height:1px;
    display:block
    // width:100%;
    
`; 

const  SignUP = styled.div`
    font-weight:bold;
    color:#f9f9f9;
    background-color:#0063e5;
    width:94%;
    overflow:hidden;
    margin-bottom:12px;
    letter-spacing:1.5px;
    font-size:18px;
    padding:16.5px 0;
    border:1px solid transparent;
    border-radius:4px;
    &::hover {
      
    }
`;

const Description = styled.p`
    position: relative;
    color:hsla(0,0%,95.3%,1);
    font-style: 11px;
    margin: 0 0 24px;
    width:97%;
    letter-spacing: 1.5px;

`;

const CTALogoTwo = styled.img`
    width: 100%;
    display: inline-block;
    vertical-align: bottom;

`;

export default Login;