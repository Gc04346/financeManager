import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #b4d6bc;
  align-items: center;
  padding: 40px 0 30px;
`;

export const Top = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  color: #000;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;

export const PresentExpenses = styled.ScrollView.attrs({
  contentContainerStyle: {
    backgroundColor: "#b4d8d8",
    minHeight: "50%",
    minWidth: "90%",
    flexDirection: "column",
    justifyContent: "space-around",
    borderRadius: 15,
  },
  showsHorizontalScrollIndicator: false,
})``;


export const Expense = styled.View`
  margin: 5px;
`;

export const ExpenseProgressBar = styled.View`
  flex-direction: column;
  width: 40%;

`;

export const ExpenseDescription = styled.Text`
  font-size: 18px;
  color: #000;
`;