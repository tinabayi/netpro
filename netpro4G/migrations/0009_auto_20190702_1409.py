# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2019-07-02 12:09
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('netpro4G', '0008_service'),
    ]

    operations = [
        migrations.AddField(
            model_name='service',
            name='image',
            field=models.ImageField(null=True, upload_to='image/'),
        ),
        migrations.AlterField(
            model_name='service',
            name='service',
            field=models.TextField(null=True),
        ),
    ]