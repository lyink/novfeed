from django import template

register = template.Library()

@register.filter
def mult(value, arg):
    """Multiplies the value by the argument"""
    try:
        return int(value) * int(arg)
    except (ValueError, TypeError):
        return ''