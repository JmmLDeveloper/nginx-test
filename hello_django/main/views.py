from django.shortcuts import render
import os


def main(response):
    return render(response,'index.html',{
        'message': os.environ.get('SERVER_MESSAGE')
    })


