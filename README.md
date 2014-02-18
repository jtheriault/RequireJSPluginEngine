# RequireJS as a Plugin Engine: "Echo" Demonstration
This is the accompanying demonstration to a blog post entitled *RequireJS Paths: An Off-the-Shelf Plugin Engine*. 
which shows configuring RequireJS with different path values in order to swap implementations.

In this demonstration, the user is asked for input, which is confirmed and repeated to the 
screen.

In **"Obnoxious Mode,"** the default, the RequireJS path for *output* is set to output/obnoxious
which contains the implementations for the three output interfaces as wrappers to the browser 
window's native prompt, confirm and alert functions.

In **"Polite Mode,"** the RequireJS path for output is set to output/polite which contains 
implementations for the interfaces that rely on HTML elements for I/O.