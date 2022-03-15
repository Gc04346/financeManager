import { ScrollView, Text } from "react-native";
import { ProgressBar } from "react-native-paper";
import {
  Container,
  Title,
  Top,
  PresentExpenses,
  FutureExpenses,
  ExpenseDescription,
  ExpenseProgressBar,
  Expense,
  ExpenseCategory,
  ExpenseCategoryTitle,
} from "./styles";

export default function Main() {
  return (
    <Container>
      <Top>
        <Title>Março</Title>
      </Top>
      <ScrollView>
      <ExpenseCategory>
          <ExpenseCategoryTitle style={{ transform: [{ rotate: "-90deg" }] }}>
            Present (70%)
          </ExpenseCategoryTitle>
          <PresentExpenses>
            <Expense>
              <ExpenseDescription>Gastos</ExpenseDescription>
              <ExpenseProgressBar>
                <ProgressBar
                  progress={0.15}
                  color="#C70039"
                  styles={{ width: "30px", borderRadius: 5 }}
                />
                <ExpenseDescription>$750 / $5.000</ExpenseDescription>
              </ExpenseProgressBar>
              <ExpenseDescription>(15%)</ExpenseDescription>
            </Expense>
            <Expense>
              <ExpenseDescription>Gastos</ExpenseDescription>
              <ExpenseProgressBar>
                <ProgressBar
                  progress={0.15}
                  color="#C70039"
                  styles={{ width: "30px", borderRadius: 5 }}
                />
                <ExpenseDescription>$750 / $5.000</ExpenseDescription>
              </ExpenseProgressBar>
              <ExpenseDescription>(15%)</ExpenseDescription>
            </Expense>
            <Expense>
              <ExpenseDescription>Gastos</ExpenseDescription>
              <ExpenseProgressBar>
                <ProgressBar
                  progress={0.15}
                  color="#C70039"
                  styles={{ width: "30px", borderRadius: 5 }}
                />
                <ExpenseDescription>$750 / $5.000</ExpenseDescription>
              </ExpenseProgressBar>
              <ExpenseDescription>(15%)</ExpenseDescription>
            </Expense>
            <Expense>
              <ExpenseDescription>Gastos</ExpenseDescription>
              <ExpenseProgressBar>
                <ProgressBar
                  progress={0.15}
                  color="#C70039"
                  styles={{ width: "30px", borderRadius: 5 }}
                />
                <ExpenseDescription>$750 / $5.000</ExpenseDescription>
              </ExpenseProgressBar>
              <ExpenseDescription>(15%)</ExpenseDescription>
            </Expense>
            <Expense>
              <ExpenseDescription>Gastos</ExpenseDescription>
              <ExpenseProgressBar>
                <ProgressBar
                  progress={0.15}
                  color="#C70039"
                  styles={{ width: "30px", borderRadius: 5 }}
                />
                <ExpenseDescription>$750 / $5.000</ExpenseDescription>
              </ExpenseProgressBar>
              <ExpenseDescription>(15%)</ExpenseDescription>
            </Expense>
            <Expense>
              <ExpenseDescription>Gastos</ExpenseDescription>
              <ExpenseProgressBar>
                <ProgressBar
                  progress={0.15}
                  color="#C70039"
                  styles={{ width: "30px", borderRadius: 5 }}
                />
                <ExpenseDescription>$750 / $5.000</ExpenseDescription>
              </ExpenseProgressBar>
              <ExpenseDescription>(15%)</ExpenseDescription>
            </Expense>
            <Expense>
              <ExpenseDescription>Gastos</ExpenseDescription>
              <ExpenseProgressBar>
                <ProgressBar
                  progress={0.15}
                  color="#C70039"
                  styles={{ width: "30px", borderRadius: 5 }}
                />
                <ExpenseDescription>$750 / $5.000</ExpenseDescription>
              </ExpenseProgressBar>
              <ExpenseDescription>(15%)</ExpenseDescription>
            </Expense>
            <Expense>
              <ExpenseDescription>Gastos</ExpenseDescription>
              <ExpenseProgressBar>
                <ProgressBar
                  progress={0.15}
                  color="#C70039"
                  styles={{ width: "30px", borderRadius: 5 }}
                />
                <ExpenseDescription>$750 / $5.000</ExpenseDescription>
              </ExpenseProgressBar>
              <ExpenseDescription>(15%)</ExpenseDescription>
            </Expense>
            <Expense>
              <ExpenseDescription>Gastos</ExpenseDescription>
              <ExpenseProgressBar>
                <ProgressBar
                  progress={0.15}
                  color="#C70039"
                  styles={{ width: "30px", borderRadius: 5 }}
                />
                <ExpenseDescription>$750 / $5.000</ExpenseDescription>
              </ExpenseProgressBar>
              <ExpenseDescription>(15%)</ExpenseDescription>
            </Expense>
          </PresentExpenses>
        </ExpenseCategory>
        
        <ExpenseCategory>
          <ExpenseCategoryTitle style={{ transform: [{ rotate: "-90deg" }] }}>
            Futuro (30%)
          </ExpenseCategoryTitle>
          <FutureExpenses>
            <Expense>
              <ExpenseDescription>Gastos</ExpenseDescription>
              <ExpenseProgressBar>
                <ProgressBar
                  progress={0.15}
                  color="#581845"
                  styles={{ width: "30px", borderRadius: 5 }}
                />
                <ExpenseDescription>$750 / $5.000</ExpenseDescription>
              </ExpenseProgressBar>
              <ExpenseDescription>(15%)</ExpenseDescription>
            </Expense>
            <Expense>
              <ExpenseDescription>Gastos</ExpenseDescription>
              <ExpenseProgressBar>
                <ProgressBar
                  progress={0.15}
                  color="#581845"
                  styles={{ width: "30px", borderRadius: 5 }}
                />
                <ExpenseDescription>$750 / $5.000</ExpenseDescription>
              </ExpenseProgressBar>
              <ExpenseDescription>(15%)</ExpenseDescription>
            </Expense>
            <Expense>
              <ExpenseDescription>Gastos</ExpenseDescription>
              <ExpenseProgressBar>
                <ProgressBar
                  progress={0.15}
                  color="#581845"
                  styles={{ width: "30px", borderRadius: 5 }}
                />
                <ExpenseDescription>$750 / $5.000</ExpenseDescription>
              </ExpenseProgressBar>
              <ExpenseDescription>(15%)</ExpenseDescription>
            </Expense>
            <Expense>
              <ExpenseDescription>Gastos</ExpenseDescription>
              <ExpenseProgressBar>
                <ProgressBar
                  progress={0.15}
                  color="#581845"
                  styles={{ width: "30px", borderRadius: 5 }}
                />
                <ExpenseDescription>$750 / $5.000</ExpenseDescription>
              </ExpenseProgressBar>
              <ExpenseDescription>(15%)</ExpenseDescription>
            </Expense>
          </FutureExpenses>
        </ExpenseCategory>
      </ScrollView>
    </Container>
  );
}
