# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2019-06-27 12:59
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('netpro4G', '0003_auto_20190627_1402'),
    ]

    operations = [
        migrations.AddField(
            model_name='aboutus',
            name='post_image',
            field=models.ImageField(null=True, upload_to='image/'),
        ),
    ]
