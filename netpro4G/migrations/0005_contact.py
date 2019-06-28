# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2019-06-28 09:23
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('netpro4G', '0004_aboutus_post_image'),
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=60, null=True)),
                ('location', models.CharField(max_length=60, null=True)),
                ('phone', models.IntegerField(null=True)),
                ('email', models.EmailField(max_length=254, null=True)),
                ('website', models.CharField(max_length=60, null=True)),
            ],
            options={
                'ordering': ['title'],
            },
        ),
    ]
