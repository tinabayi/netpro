# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2019-08-05 09:23
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('netpro4G', '0019_mission'),
    ]

    operations = [
        migrations.CreateModel(
            name='Service',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=60, null=True)),
                ('services', models.TextField(null=True)),
            ],
            options={
                'ordering': ['title'],
            },
        ),
    ]
