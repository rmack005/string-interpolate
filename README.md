string-interpolate
==================

Simple string interpolation via double mustache (curly) brackets {{}}.

The package extends the String object, adding an interpolate method. The method accepts either an object or an array as a parameter. The string indicates which values go where by using either a property name (in the case where an object was passed) or an index (when an array was passed).  Basically, the string becomes a very simple template.

Example: 


    "this is a {{test}}.".interpolate({"test": "successful test});
    "this is a {{0}} {{1}}.".interpolate(["successful", "test"]);


Results:

    "this is a successful test."
    "this is a successful test."