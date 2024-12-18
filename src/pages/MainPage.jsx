
import './MainPage.css';

const MainPage = () => {
  const pythonCode = `class Matrix:
    def __init__(self, matrix):
        self.matrix = matrix
        self.rowLength = len(matrix)
        self.columnLength = len(matrix[0])
        self.n = len(matrix) # for inverse

    def __str__(self):
        return "\n".join(["\t".join(map(str, row)) for row in self.matrix])

    def __add__(self, other):
        if self.rowLength != other.rowLength or self.columnLength != other.rowLength:
            raise ValueError("Матрицы должны быть одинакового размера для сложения.")

        result = [[self.matrix[i][j] + other.matrix[i][j] for j in range(self.columnLength)] for i in
                  range(self.rowLength)]
        return Matrix(result)

    def __sub__(self, other):
        if self.rowLength != other.rowLength or self.columnLength != other.rowLength:
            raise ValueError("Матрицы должны быть одинакового размера для вычитания.")

        result = [[self.matrix[i][j] - other.matrix[i][j] for j in range(self.columnLength)] for i in
                  range(self.rowLength)]
        return Matrix(result)

    def __mul__(self, other):
        if self.columnLength != other.rowLength:
            raise ValueError(
                "Количество столбцов первой матрицы должно совпадать с количеством строк второй матрицы для умножения.")

        result = [[0 for _ in range(other.columnLength)] for _ in range(self.rowLength)]

        for i in range(self.rowLength):
            for j in range(other.columnLength):
                for k in range(self.columnLength):
                    result[i][j] += self.matrix[i][k] * other.matrix[k][j]

        return Matrix(result)

    def to_dict(self):
        return {'matrix': self.matrix}
    
    @classmethod
    def from_dict(cls, data_dict):
        return cls(data_dict['matrix'])

    # More methods follow...
  `;

  return (
    <div className="main-page">
      <header className="main-header">
        <h1>Matrix Operations</h1>
      </header>
      <section className="code-section">
        <h2>Python Code</h2>
        <pre className="code-block">
          <code>{pythonCode}</code>
        </pre>
      </section>
    </div>
  );
};

export default MainPage;
