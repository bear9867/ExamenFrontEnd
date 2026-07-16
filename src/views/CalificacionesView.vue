<template>
    <div class="container mt-5">

        <form @submit.prevent="evaluateScore" class="mt-3">
            <div class="mb-3">
                <label for="inputScore" class="form-label">Nota 1</label>
                <input type="number" id="inputScore1" v-model.number="score1" class="form-control" required min="10" max="70">
            </div>
            <div class="mb-3">
                <label for="inputScore" class="form-label">Nota 2</label>
                <input type="number" id="inputScore2" v-model.number="score2" class="form-control" required min="10" max="70">
            </div>
            <div class="mb-3">
                <label for="inputScore" class="form-label">Nota 3</label>
                <input type="number" id="inputScore3" v-model.number="score3" class="form-control" required min="10" max="70">
            </div>
            <div class="mb-3">
                <label for="inputScore" class="form-label">Asistencia (%)</label>
                <input type="number" id="inputScore4" v-model.number="score4" class="form-control" required min="0" max="100">
            </div>
            <button type="submit" class="btn btn-primary">Evaluar</button>
        </form>
        
        <div v-if="score >= 9" :class="alertClass" role="alert">
            {{ message }}
            <br>
            {{ message2 }}
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                score1: null,
                score2: null,
                score3: null,
                score4: null,
                score: null,
                message: '',
                message2: ''
            };
        },
        computed: {
            alertClass() {
                if (this.score === null) {
                    return '';
                }
                if (this.score >= 40 && this.score4 >= 80) {
                    return 'alert alert-success';
                }else if (this.score >= 40 && this.score4 < 80) {
                    return 'alert alert-warning';
                } else {
                    return 'alert alert-danger';
                }
            }
        },
        methods: {
            evaluateScore() {

                const total = (this.score1 * 0.35 || 0) + (this.score2 * 0.35 || 0) + (this.score3 * 0.30 || 0);
                this.score = total.toFixed(2);

                if (this.score === null || isNaN(this.score) || this.score < 10 || this.score > 70) {
                    this.message = 'Por favor ingresa una puntuación válida (entre 10 y 70).';
                } else if(this.score4 === null || isNaN(this.score4) || this.score4 < 0 || this.score4 > 100) {
                    this.message = 'Por favor ingresa porcentaje de asistencia valido (entre 0 y 100).';
                } else {
                    if (this.score >= 40 && this.score4 >= 80) {
                        this.message = `Tu promedio es ${this.score}`;
                        this.message2 = `Tu estado es: Aprobado`;
                    }  else if (this.score4 < 80){
                        this.message = `Tu promedio es ${this.score}% `;
                        this.message2 = `Tu estado es: Reprobado por asistencia `;
                        if (this.score < 40 ){
                             this.message2 += `y promedio.`;
                        }
                    } else{
                        this.message = `Tu promedio es ${this.score} `;
                        this.message2 = `Tu estado es: Reprobado`;
                    }
                }
            }
        }
    };
</script>
<style scoped>
.container {
  width: min(90%, 600px);
  margin: 40px auto;
  padding: 25px;
  background-color: var(--color-background-soft);
  border: 1px solid #cccccc;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}

form {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.mb-3 {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.form-label {
  display: block;
  margin-bottom: 6px;
  color: var(--color-text);
  font-weight: bold;
  text-align: left;
}

.form-control {
  width: 100%;
  height: 42px;
  padding: 10px;
  color: var(--color-text);
  background-color: var(--color-background);
  border: 1px solid #cccccc;
  border-radius: 5px;
  box-sizing: border-box;
  font-family: inherit;
  font-size: 15px;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.form-control:focus {
  border-color: #007bff;
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.2);
}

.btn-primary {
  width: 100%;
  margin-top: 5px;
  padding: 11px 20px;
  color: #ffffff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  font-family: inherit;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    transform 0.1s ease;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.btn-primary:active {
  transform: scale(0.99);
}

.alert {
  width: 100%;
  margin-top: 20px;
  padding: 15px;
  border: 1px solid transparent;
  border-radius: 5px;
  box-sizing: border-box;
  font-weight: 600;
  text-align: center;
}

.alert-success {
  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb;
}

.alert-info {
  color: #0c5460;
  background-color: #d1ecf1;
  border-color: #bee5eb;
}

.alert-warning {
  color: #856404;
  background-color: #fff3cd;
  border-color: #ffeeba;
}

.alert-danger {
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
}

@media (max-width: 600px) {
  .container {
    width: 92%;
    margin: 25px auto;
    padding: 20px;
  }

  .form-control {
    font-size: 16px;
  }
}
</style>
