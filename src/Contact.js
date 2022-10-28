import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Contact page</h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.2800012117013!2d73.12487761453248!3d19.007379559065885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e850fd08213d%3A0xe57008fded20f747!2sOmkar%20Bramha!5e0!3m2!1sen!2sin!4v1666928866763!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{border:0}}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form method="POST" action="https://formspree.io/f/xeqdrpng" className="contact-inputs">
            <input type="text"
                   placeholder="username"
                   name="username"
                   required
                   autocomplete="off"
                   
                   />
            
            <input type="email" 
                   placeholder="email"
                   name="email"
                   required
                   autocomplete="off"
                   
                   />
            <textarea 
                   name="Message"
                   cols="30"
                   rows="10"
                   required
                   autocomplete="off"
                   placeholder="Enter your Message"
                   />

            <input type="submit" value="send"/>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
