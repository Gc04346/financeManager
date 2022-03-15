import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #b4d6bc;
  align-items: center;
  padding: 40px 0 30px;
`;

export const ExpenseCategory = styled.View`
  flex-direction: row;
  align-items: center;
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

export const ExpenseCategoryTitle = styled.Text`
  color: #000;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;

export const PresentExpenses = styled.ScrollView.attrs({
  contentContainerStyle: {
    backgroundColor: "#b4d8d8",
    minHeight: "50%",
    maxHeight: "50%",
    borderRadius: 15,
  },
  showsHorizontalScrollIndicator: false,
})``;

export const FutureExpenses = styled.ScrollView.attrs({
  contentContainerStyle: {
    backgroundColor: "#DAF7A6",
    minHeight: "50%",
    minWidth: "90%",
    borderRadius: 15,
  },
  showsHorizontalScrollIndicator: false,
})``;


export const Expense = styled.View`
  margin: 10px;
  flex-direction: row;
  justify-content: space-around;
`;

export const ExpenseProgressBar = styled.View`
  flex-direction: column;
  width: 40%;

`;

export const ExpenseDescription = styled.Text`
  font-size: 18px;
  color: #000;
`;