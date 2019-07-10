# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2019-07-10 12:10
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('netpro4G', '0015_auto_20190710_1019'),
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=60, null=True)),
                ('project', models.TextField(null=True)),
            ],
            options={
                'ordering': ['title'],
            },
        ),
    ]
