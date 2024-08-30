import { styled } from "styled-components";
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto -40px;
  padding: 20px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background: #ffffff;
  border-radius: 24px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  h1 {
    font-size: 1.2rem;
    color: #333;
  }
  img {
    width: 55px;
    height: 50px;
  }
`;

const LogoutButton = styled.button`
  top: 20px;
  left: 20px;
  padding: 0.5rem 1rem;
  background-color: transparent;
  color: #2c3e50;
  border: 1px solid #2c3e50;
  border-radius: 8px;
  font-size: 0.875rem;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s,
    box-shadow 0.3s;

  &:hover {
    background-color: #2c3e50;
    color: white;
    box-shadow: 1px 3px 5px #34495e;
    border: 1px solid #2c3e50;
  }

  @media (max-width: 480px) {
    top: 10px;
    left: 10px;
    padding: 0.4rem 0.8rem;
    font-size: 0.75rem;
  }
`;

const Main = styled.main`
  .welcome-message {
    h2 {
      font-size: 36px;
      font-weight: 700;
      color: #2c3e50;
    }
  }
`;

const CardContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled.div`
  width: 100%;
  max-width: 270px;
  height: 100px;
  padding: 24px;
  background: #2c3e50;
  color: #bad7e9;
  border-radius: 12px;
  overflow: hidden;
  border-top: 1px solid rgb(2, 2, 2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  box-shadow: 2px solid #bad7e9;
  &:hover {
    background: #1a252f;
    box-shadow: 1px 3px 5px #34495e;
  }
`;

const CardContent = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const Count = styled.div`
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0.15px;
  word-wrap: break-word;
  color: white;
`;

const Description = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.15px;
  word-wrap: break-word;
  z-index: 1;
  color: white;
  .bold {
    font-weight: 700;
  }
`;

const TableContainer = styled.div`
  padding-top: 20px;
  h2 {
    font-size: 20px;
    font-weight: 700;
    color: #2c3e50;
  }
`;

const Table = styled.table`
  font-family: "Plus Jakarta Sans", sans-serif;
  border-collapse: collapse;
  width: 100%;
`;
const Td = styled.td`
  border: 1px solid #1a252f;
  text-align: left;
  padding: 8px;
`;
const Th = styled.th`
  border: 1px solid #1a252f;
  text-align: left;
  padding: 8px;
`;
const EditDeleteButton = styled.button`
  top: 20px;
  left: 20px;
  padding: 0.2rem 0.6rem;
  background-color: transparent;
  color: #2c3e50;
  border: 1px solid #2c3e50;
  border-radius: 8px;
  font-size: 0.875rem;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s,
    box-shadow 0.3s;

  &:hover {
    background-color: #2c3e50;
    color: white;
    box-shadow: 1px 3px 5px #34495e;
    border: 1px solid #2c3e50;
  }

  @media (max-width: 480px) {
    top: 10px;
    left: 10px;
    padding: 0.4rem 0.8rem;
    font-size: 0.75rem;
  }
`;
export {
  Container,
  Header,
  Logo,
  LogoutButton,
  Main,
  CardContainer,
  Card,
  CardContent,
  Count,
  Description,
  TableContainer,
  Table,
  Th,
  Td,
  EditDeleteButton,
};
