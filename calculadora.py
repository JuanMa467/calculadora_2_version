from pickle import FALSE
from flask import Flask, jsonify, render_template, redirect, url_for, session
from flask import request
from sympy import sympify, SympifyError

app = Flask(__name__)
app.secret_key = "llave"



@app.route('/calculadora')
def calculadora():
    try:
        session['total'] = 0
        session['historial'] = []
        session['contador'] = 0
        return render_template("indexCalculadora.html")
    except KeyError:
        return ("NO ESTA LOGUEADO")

@app.route('/AC', methods=["GET", "POST"])
def AC():
    mensaje = ''
    total = int(session['total']) * 0
    session['total'] = total 
    mensaje = str(total)
    return jsonify({"respuesta": mensaje })

@app.route('/resultado' , methods=["GET", "POST"])
def resultado():
    try:
        mensaje = ''
        request_data = request.get_json()
        
        nYO= str(request_data['nYO'])
        totalAnterior = int(request_data['total'])
        nYO=nYO.replace('%','*0.01*')
        resultado = sympify(nYO) 
        mensaje+="Total anterior: "+ str(totalAnterior) + "<br> La operacion fue "+ str(nYO) +" = " +str(resultado)+"<br>"
        mensaje2= str(resultado)
        return jsonify({"respuestaDeTAct": mensaje2, "respuestaHistorial": mensaje })
    except SympifyError as e:
        print("Error al evaluar la expresión:", str(e))
if __name__ == '__main__':
    app.run(debug=True, port=5000)