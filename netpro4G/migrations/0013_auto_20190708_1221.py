# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2019-07-08 10:21
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('netpro4G', '0012_background'),
    ]

    operations = [
        migrations.RenameField(
            model_name='background',
            old_name='Background',
            new_name='background',
        ),
    ]
