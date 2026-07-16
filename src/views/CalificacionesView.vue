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
  width: 50%;
  margin: 40px auto;
  padding: 20px;
  border: 1px solid #cccccc;
  border-radius: 5px;
}

.mb-3 {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  box-sizing: border-box;
}

.btn-primary {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.alert {
  margin-top: 20px;
  padding: 15px;
  border-radius: 5px;
  text-align: center;
}

.alert-success {
  color: #155724;
  background-color: #d4edda;
}

.alert-info {
  color: #0c5460;
  background-color: #d1ecf1;
}

.alert-warning {
  color: #856404;
  background-color: #fff3cd;
}

.alert-danger {
  color: #721c24;
  background-color: #f8d7da;
}

@media (max-width: 600px) {
  .container {
    width: 90%;
  }
}
</style>
