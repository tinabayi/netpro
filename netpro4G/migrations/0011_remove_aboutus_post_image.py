# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2019-07-03 10:44
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('netpro4G', '0010_welcome'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='aboutus',
            name='post_image',
        ),
    ]
