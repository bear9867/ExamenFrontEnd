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
                if (this.score >= 90) {
                    return 'alert alert-success';
                } else if (this.score >= 70) {
                    return 'alert alert-info';
                } else if (this.score >= 50) {
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
                        this.message2 = `Tu estado es: Reprobado por asistencia`;
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
    /* Estilos específicos del componente */
    .container {
        max-width: 500px;
        margin: 0 auto;
    }

    .form-label {
      display: block;
      font-weight: bold;
      margin-top: 10px;
      margin-bottom: 5px;
      text-align: center;
    }
    .form-control {
      padding: 10px;
      height: 40px;
      width: 100%;
      font-size: 14px; 
    }

    .btn-primary {
        margin-top: 18px;
    }
</style>
