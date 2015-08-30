
window.ds = window.ds || {};

(function(ns) {
    
    ns.Line = Line;
    
    function Line() {
        this.slope;
        this.intercept;
    }
    
    Line.prototype.init = init;
    Line.prototype.intersect = intersect;
    
    function init(slope, intercept) {
        this.slope = slope;
        this.intercept = intercept;
        return this;
    }
    
    function intersect(line2) {
        // checks if this line intercept with another line
        var epsilon = 0.000001;
        
        return Math.abs(this.slope - line2.slope) > epsilon || 
        Math.abs(this.intercept - line2.intercept) > epsilon;
    }
}
(window.ds));

var l1, l2, Line = window.ds.Line;

l1 = new Line().init(0.5, 2.3);
l2 = new Line().init(0.5, 3.3);
l1.intersect(l2);   // true

l1.init(0.5, 2.3);
l2.init(0.5, 2.3);
l1.intersect(l2);

l1.init(0.6, 2.3);
l2.init(0.5, 2.3);
l1.intersect(l2);

