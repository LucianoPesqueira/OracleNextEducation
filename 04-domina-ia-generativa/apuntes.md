# Domina la IA Generativa

# CURSO IA: Explorando el potencial de la Inteligencia Artificial Generativa

## algunos de los LLM populares:
- ChatGPT
- Gemini
- DeepSeek

## ¿Que es LLM?
Los LLM (**L**arge **L**anguague **M**odels) ó Modelo de Lenguaje de Gran Tamaño, son sistema de inteligencia artificial(IA) diseñados para entender y generar lenguaje humano.

## Principios de Ingenieria de Prompt
- Tener claridad al dar instrucciones(1)
- dividir tareas complejas(2)
- pedir que explique los pasos(3)
- pedir justificaciones sobre la respuesta(4)
- usar tecnica (*self-consistency*) para validar respuesta(5)

prompt 1: (1)(2)
paso 1 - dame una lista de 5 hoteles en roma que tengan sauna
paso 2 - escribe un articulo de blog sobre ellos.
paso 3 - crea un post para instagram basado en el articulo de blog generado

prompt 2: (3)
Antes de darme una respuesta final, describe los pasos que seguirias para resolver el siguiente problema matematico ¿cual es la raiz cuadrada de 144?

prompt 3: (4)(4)
Responde a la preguna ¿cual es el mejor enfoque para reducir el impacto sobre el calentamiento global? luego, repite la pregunta tres veces, cambiando ligeramente las formulaciones y compara si las respuestas coinciden.

## Mas herramientas:
- Google Sheets
    - complementos: SheetsGPT
        - =GPTList("dame una lista de 5 nombres")
        - =GPT("Analiza o clasifica en positivo, neutro o negativo el siguiente tweet:" &B5)

## Analisis de Audios Estudio
- en google colab podemos transcribir un audio a texto - https://colab.google/
    - New Notebook
    - el codigo para intalar openai-whisper:
        !pip install openai-whisper
        import whisper
    - luego de ejecutarlo, el siguiente codigo es para realizar la transcripcion:
        model = whisper.load_model("small")
        resul = model.transcribe("/ruta/a/tu/audio.mp3") #subo el archivo de audio antes, y pego la ruta de acceso
        print(resul["text"])
    - el texto se encuentra en la carpeta Transcripcion - desafíos y soluciones - audio.txt


## Generacion de imagenes
- Bing
    - https://www.bing.com/images/create

- Midjourney
    - https://www.midjourney.com/explore?tab=video_top

----------------------------------------------------------------------------
# Curso Ingenieria de Prompt: creando prompts eficaces para la IA generativa

- **Proximidad semantica**
    - Word Embeddings: Representaciones distribuidas de las palabras que comprenden la proximidad semantica entre ellas.

- **Temperatura y Tokens**
    - Temperatura: Es un parametro que controla el nivel de aleatoriedad o creatividad en las respuestas generadas por el modelo.
    - Tokens: Unidades basicas en las que se divide el texto para que los modelos de lenguaje puedan procesarlo.

Principios para la creacion de *un prompt ideal*:
- Tener claridad al dar las instrucciones
- Dividir tareas complejas en subtareas mas pequeñas
- pedir que explique los pasos antes de dar la respuesta.
- Pedir que de justificaciones de la respuesta
- Generar varias respuestas diferentes y pedir que elija la mejor.

Frameworks:
**CLEAR**: Context, Length, Expetation, Action, Result
**SMART**: Specific, Measurable, Achievable, relevant, Time-bound
**IDEAL**: Identify, Deffine, Enumerate, Analyze, List
**BRIEF**: Background, Reason, Information, End, Follow-up

Zero-Shot vs Few-Shot Prompt
**Zero-shot**: Es la habilidad de un modelo de aprender y generalizar a partir de informacion limitada o inexistente.
**Few-Shot**: Implica proporcionar al modelo ejemplos de la tarea deseada para guiar su comprension y generar resultados mas precisos.

**Chain-of-thought Prompt**
La cadena de instruccion de pensamiento es un enfoque en IA que simulo procesos de razonamiento similares a los humanos para un resolucion final.

**Least-to-Most Prompting**
Es una estrategia donde se empieza con el nivel de asistencia mas minimo y se va aumnetando gradualemente hasta que se logra la respuesta correcta.