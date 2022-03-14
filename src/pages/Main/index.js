import {Text} from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { Container, Title, Top, PresentExpenses, ExpenseDescription, ExpenseProgressBar, Expense } from "./styles";

export default function Main() {
  return (
    <Container>
      <Top>
        <Title>Março</Title>
      </Top>
      <PresentExpenses>
        <Expense>
        <ExpenseDescription>Gastos</ExpenseDescription>
        <ExpenseProgressBar>
          <ProgressBar progress={0.15} color="#C70039" styles={{width: '30px', borderRadius:5}}/>
          <ExpenseDescription>$750 / $5.000</ExpenseDescription>
        </ExpenseProgressBar>
        <ExpenseDescription>(15%)</ExpenseDescription>
        </Expense>
        <Expense>
        <ExpenseDescription>Gastos</ExpenseDescription>
        <ExpenseProgressBar>
          <ProgressBar progress={0.15} color="#C70039" styles={{width: '30px', borderRadius:5}}/>
          <ExpenseDescription>$750 / $5.000</ExpenseDescription>
        </ExpenseProgressBar>
        <ExpenseDescription>(15%)</ExpenseDescription>
        </Expense>
        <Expense>
        <ExpenseDescription>Gastos</ExpenseDescription>
        <ExpenseProgressBar>
          <ProgressBar progress={0.15} color="#C70039" styles={{width: '30px', borderRadius:5}}/>
          <ExpenseDescription>$750 / $5.000</ExpenseDescription>
        </ExpenseProgressBar>
        <ExpenseDescription>(15%)</ExpenseDescription>
        </Expense>
        <Expense>
        <ExpenseDescription>Gastos</ExpenseDescription>
        <ExpenseProgressBar>
          <ProgressBar progress={0.15} color="#C70039" styles={{width: '30px', borderRadius:5}}/>
          <ExpenseDescription>$750 / $5.000</ExpenseDescription>
        </ExpenseProgressBar>
        <ExpenseDescription>(15%)</ExpenseDescription>
        </Expense>
      </PresentExpenses>
    </Container>
  );
}
