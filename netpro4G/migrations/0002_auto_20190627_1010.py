# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2019-06-27 08:10
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('netpro4G', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='aboutus',
            name='post',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='aboutus',
            name='title',
            field=models.CharField(max_length=60, null=True),
        ),
    ]
