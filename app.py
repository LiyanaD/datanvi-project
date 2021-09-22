# -*- coding: utf-8 -*-

# Run this app with `python app.py` and
# visit http://127.0.0.1:8050/ in your web browser.

import dash
import dash_core_components as dcc
import dash_html_components as html
import plotly.express as px
import pandas as pd
from flask import Flask, render_template
import plotly

<<<<<<< Updated upstream
external_stylesheets = ['https://codepen.io/chriddyp/pen/bWLwgP.css', './assets/css/bootstrap.min.css', './assets/css/paper-dashboard.css?v=2.0.1'
                    , 'https://fonts.googleapis.com/css?family=Montserrat:400,700,200', 'https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css']
=======
app = Flask(__name__)
@app.route(‘/’)
def notdash():
   df = pd.read_csv('export2.csv')
>>>>>>> Stashed changes

fig = px.bar(df, x=location, y=total_cases, color=”City”,    barmode=”group”)

<<<<<<< Updated upstream
# assume you have a "long-form" data frame
# see https://plotly.com/python/px-arguments/ for more options
df = pd.read_csv('owid-covid-data.csv')

continents = ['Asia', 'Europe', 'Africa', 'North America', 'South America',
       'Oceania']
fig = px.line(data_frame=df[df['continent'].isin(continents)],x='date',y='total_cases',color='location',hover_data=['location'], title="Line Graph of the Total Cases of the Country in the World")

app.layout = html.Div(children=[
    html.H1(children='Hello Dash'),

    html.Div(children='''
        Dash: A web application framework for Python.
    '''),

    dcc.Graph(
        id='example-graph',
        figure=fig
    )
])

if __name__ == '__main__':
    app.run_server(debug=True)
=======
graphJSON = json.dumps(fig, cls=plotly.utils.PlotlyJSONEncoder)

return render_template(‘notdash.html’, graphJSON=graphJSON)
>>>>>>> Stashed changes
